import { farmermodel, needmodel, usermodel } from "../../models/model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import transporter from "../NodeMailer.js";

export const registerfarmer = async (req, res) => {
  const { name, country, state, email, bank, phone, story, password } =
    req.body;
  if (
    !name ||
    !state ||
    !country ||
    !email ||
    !bank ||
    !phone ||
    !story ||
    !password
  ) {
    return res.json({ success: false, message: "Input fields Required" });
  }
  try {
    const alreadyemail = await farmermodel.findOne({ email });
    const alreadyphone = await farmermodel.findOne({ phone });
    const alreadybank = await farmermodel.findOne({ bank });
    if (alreadyemail) {
      return res.json({ success: false, message: "Email already Registered" });
    }
    if (alreadybank) {
      return res.json({
        success: false,
        message: "Bank account already registered",
      });
    }
    if (alreadyphone) {
      return res.json({
        success: false,
        message: "Phone number already registered",
      });
    }
    const hashedpassword = await bcrypt.hash(password, 10);
    const farmer = new farmermodel({
      name,
      email,
      bank,
      phone,
      password: hashedpassword,
      country,
      state,
      story,
    });
    await farmer.save();

    const token = jwt.sign({ id: farmer._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    const mailoption = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "Welcome To KisanConnect",
      text: `Email Registered,Your email is ${email}`,
    };
    await transporter.sendMail(mailoption);
    return res.json({ success: true, message: "Account Created" });
  } catch (e) {
    res.json({ success: false, message: e.message });
  }
};

export const insertdonation = async (req, res) => {
  const farmer = req.farmer;
  const { storyline, currentneed, amount } = req.body;
  if (!storyline || !currentneed || !amount) {
    return res.json({ success: false, message: "Input Fields Required" });
  }
  try {
    const needs = new needmodel({ farmer, storyline, currentneed, amount });
    await needs.save();
    farmer.needs.push(needs);
    await farmer.save();

    return res.json({ success: true, message: "Request Added Successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const registeruser = async (req, res) => {
  const { name, email, phone, password } =
    req.body;
  if (
    !name ||
    !email ||
    !phone ||
    !password
  ) {
    return res.json({ success: false, message: "Input fields Required" });
  }
  try {
    const alreadyemail = await farmermodel.findOne({ email });
    const alreadyphone = await farmermodel.findOne({ phone });
    if (alreadyemail) {
      return res.json({ success: false, message: "Email already Registered" });
    }
    if (alreadyphone) {
      return res.json({
        success: false,
        message: "Phone number already registered",
      });
    }
    const hashedpassword = await bcrypt.hash(password, 10);
    const user = new usermodel({
      name,
      email,
      phone,
      password: hashedpassword
    });
    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    const mailoption = {
      from: process.env.SENDER_EMAIL,
      to: email,
      subject: "Welcome To KisanConnect",
      text: `Email Registered,Your email is ${email}`,
    };
    await transporter.sendMail(mailoption);
    return res.json({ success: true, message: "Account Created" });
  } catch (e) {
    res.json({ success: false, message: e.message });
  }
};
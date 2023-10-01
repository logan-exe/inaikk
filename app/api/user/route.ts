import { NextResponse, NextRequest } from "next/server";
import dbConnect from "../../../utils/dbConnect";
import User, { IUser } from "../../../models/User";
import bcrypt from "bcryptjs";

export async function GET(request: NextRequest, context: { params: any }) {
  //accessing query params
  console.log(request.nextUrl.searchParams);
  dbConnect();
  return NextResponse.json({ messsage: "Hello World" });
}

export async function POST(request: NextRequest) {
  await dbConnect();

  // Parse the request body
  const { username, email, password } = await request.json();

  // TODO: Add more robust validation as necessary
  if (!username || !email || !password) {
    return NextResponse.json({ message: "All fields are required!" });
  }

  try {
    // Check if a user already exists with this email or username
    const existingUserByEmail = await User.findOne({ email });
    const existingUserByUsername = await User.findOne({ username });

    if (existingUserByEmail) {
      return NextResponse.json({
        message: "A user already exists with this email!",
      });
    }

    if (existingUserByUsername) {
      return NextResponse.json({ message: "Username is already taken!" });
    }

    // Encrypt the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const user: IUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return NextResponse.json({ message: "User created successfully!" });
  } catch (error) {
    console.error("Error while creating user:", error);
    return NextResponse.json({ message: "Error while creating user." });
  }
}

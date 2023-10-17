"use server";
import { IUser } from "@/database/User";
import pool from "@/lib/db";
import { UpdateUserDetailParams, UpdateUserParams } from "./shared.types";

export async function createUser(user: IUser): Promise<void> {
  const query = `
      INSERT INTO users (clerkId, first_name, last_name,username, email, picture)
      VALUES ($1, $2, $3, $4, $5, $6,false)
    `;

  const values = [
    user.clerkId,
    user.first_name,
    user.last_name,
    user.username,
    user.email,
    user.picture,
  ];

  try {
    await pool.query(query, values);
    console.log("User created successfully");
  } catch (error) {
    console.error("Error creating user:", error);
  }
}

export async function findUserByClerkId(clerkId: string) {
  try {
    const query = "SELECT * FROM users WHERE clerkId = $1";
    const { rows } = await pool.query<IUser>(query, [clerkId]);

    if (rows.length > 0) {
      const user = rows[0];
      return user;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error finding user by clerk_id:", error);
    throw error;
  }
}

export async function updateUserDetails(params: UpdateUserDetailParams) {
  try {
    const query = 'UPDATE users SET details = $1, pan = $2, aadhar = $3, dob = $4, account_type = $5, holder_name = $6, accountNo = $7, ifsc = $8, entity = $9, company_name = $10, display = $11,category = $12, sub_category = $13, turnover = $14, gstin = $15, org_pan = $16, website_url = $17,app_url = $18, registered_address = $19, state = $20, city = $21, pincode = $22, operating_address = $23, state2 = $24, city2 = $25, pincode2 = $26, description = $27 WHERE clerkid = $28;'

const values = [
  params.details,
  params.pan,
  params.aadhar,
  params.dob,
  params.account_type,
  params.holder_name,
  params.accountNo,
  params.ifsc,
  params.entity,
  params.company_name,
  params.display,
  params.category,
  params.sub_category,
  params.turnover,
  params.gstin,
  params.org_pan,
  params.website_url,
  params.app_url,
  params.registered_address,
  params.state,
  params.city,
  params.pincode,
  params.operating_address,
  params.state2,
  params.city2,
  params.pincode2,
  params.description,
  params.clerkId,
];
console.log(params.clerkId)

// Execute the SQL query with the values as required by your database library or driver.

var rows = await pool.query(query, values);

    return {
      code: "success",
      message: "Information updated",
    };
  } catch (error) {
    console.error("Error updating user detail:", error);
    return {
      code: "error",
      message: "Server error in updating user details",
    };
  }
}

export async function updateUser(params: UpdateUserParams): Promise<void> {
  try {
    const { clerkId, updateData } = params;

    const client = await pool.connect();

    const updateQuery = `
          UPDATE users
          SET
            first_name = $1,
            last_name = $2,
            username = $3,
            email = $4,
            picture = $5
          WHERE clerkid = $6
          RETURNING *
        `;

    const values = [
      updateData.first_name,
      updateData.last_name,
      updateData.username,
      updateData.email,
      updateData.picture,
      clerkId,
    ];

    const result = await client.query(updateQuery, values);

    if (result.rowCount > 0) {
      console.log("User updated successfully");
    } else {
      console.error("User not found or not updated");
    }
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}

import { PlatformError } from "@errors/platform";
import type { Request, Response } from "express";

const Validator = async (customer_id: string, validation_field: string) => {
    const data = {
        status: true,
        content: {
            data: {
                is_valid: true
            }
        }
    }
    return data;
};

const GetProductTypes = (customer_id: string) => {
    return {
        status: true,
        content: {
            data: [
                { 'loan_type': 'Loan Against Property', 'loan_tenure': '180 Months', 'loan_amount': 'Upto Rs. 5 crores' },
                { 'loan_type': 'Two Wheeler Loans', 'loan_tenure': 'Upto 48 Months', 'loan_amount': 'Rs. 50K - Rs. 1.5 Lakh' },
                { 'loan_type': 'Micro Home Loans', 'loan_tenure': '5 Years', 'loan_amount': 'Rs. 2 Lakh - Rs. 20 Lakh' },
                { 'loan_type': 'Personal Loan', 'loan_tenure': '5 Years', 'loan_amount': 'Rs. 5 Lakhs - Rs. 1 crore' },
            ]
        }
    }
}

export const PreApprovedLoansService = {
    Validator,
    GetProductTypes
}
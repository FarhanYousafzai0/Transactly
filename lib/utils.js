
import { z } from "zod";
/* eslint-disable no-prototype-builtins */
import { clsx } from "clsx";
import qs from "query-string";
import { twMerge } from "tailwind-merge";

// Merge Tailwind classes
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Format date in multiple forms
export const formatDateTime = (dateString) => {
  const dateTimeOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const dateDayOptions = {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  const dateOptions = {
    month: "short",
    year: "numeric",
    day: "numeric",
  };

  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const date = new Date(dateString);

  return {
    dateTime: date.toLocaleString("en-US", dateTimeOptions),
    dateDay: date.toLocaleString("en-US", dateDayOptions),
    dateOnly: date.toLocaleString("en-US", dateOptions),
    timeOnly: date.toLocaleString("en-US", timeOptions),
  };
};

// Format currency
export function formatAmount(amount) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return formatter.format(amount);
}

// Clone object
export const parseStringify = (value) => JSON.parse(JSON.stringify(value));

// Remove special characters from string
export const removeSpecialCharacters = (value) => {
  return value.replace(/[^\w\s]/gi, "");
};

// Form URL with updated query key/value
export function formUrlQuery({ params, key, value }) {
  const currentUrl = qs.parse(params);
  currentUrl[key] = value;

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  );
}

// Map account type to UI color classes
export function getAccountTypeColors(type) {
  switch (type) {
    case "depository":
      return {
        bg: "bg-blue-25",
        lightBg: "bg-blue-100",
        title: "text-blue-900",
        subText: "text-blue-700",
      };
    case "credit":
      return {
        bg: "bg-success-25",
        lightBg: "bg-success-100",
        title: "text-success-900",
        subText: "text-success-700",
      };
    default:
      return {
        bg: "bg-green-25",
        lightBg: "bg-green-100",
        title: "text-green-900",
        subText: "text-green-700",
      };
  }
}

// Count categories in transactions
export function countTransactionCategories(transactions) {
  const categoryCounts = {};
  let totalCount = 0;

  transactions &&
    transactions.forEach((transaction) => {
      const category = transaction.category;

      if (categoryCounts.hasOwnProperty(category)) {
        categoryCounts[category]++;
      } else {
        categoryCounts[category] = 1;
      }

      totalCount++;
    });

  const aggregatedCategories = Object.keys(categoryCounts).map((category) => ({
    name: category,
    count: categoryCounts[category],
    totalCount,
  }));

  aggregatedCategories.sort((a, b) => b.count - a.count);

  return aggregatedCategories;
}

// Extract last part of URL as customer ID
export function extractCustomerIdFromUrl(url) {
  const parts = url.split("/");
  return parts[parts.length - 1];
}

// Simple base64 encode/decode
export function encryptId(id) {
  return btoa(id);
}

export function decryptId(id) {
  return atob(id);
}

// Get transaction status based on date
export const getTransactionStatus = (date) => {
  const today = new Date();
  const twoDaysAgo = new Date(today);
  twoDaysAgo.setDate(today.getDate() - 2);

  return date > twoDaysAgo ? "Processing" : "Success";
};





export const getAuthFormSchema = (type) => {
  return z.object({
    email:
      type === "sign-in"
        ? z.string().min(1, { message: "Email is required" })
        : z.string().email({ message: "Invalid email address" }),

    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
        {
          message:
            "Password must contain at least one uppercase, one lowercase, one number and one special character",
        }
      ),

    firstName:
      type === "sign-up"
        ? z.string().min(2, {
            message: "First name must be at least 2 characters",
          })
        : z.string().optional(),

    lastName:
      type === "sign-up"
        ? z.string().min(2, {
            message: "Last name must be at least 2 characters",
          })
        : z.string().optional(),

    address:
      type === "sign-up"
        ? z.string().min(5, {
            message: "Address must be at least 5 characters",
          })
        : z.string().optional(),

    state:
      type === "sign-up"
        ? z.string().min(2, {
            message: "State must be at least 2 characters",
          })
        : z.string().optional(),

    postalCode:
      type === "sign-up"
        ? z.string().min(3, {
            message: "Postal code must be at least 3 characters",
          })
        : z.string().optional(),

    dateOfBirth:
      type === "sign-up"
        ? z
            .string()
            .refine((val) => {
              const date = new Date(val);
              const now = new Date();
              const minAgeDate = new Date(
                now.getFullYear() - 18,
                now.getMonth(),
                now.getDate()
              );
              return date <= minAgeDate;
            }, {
              message: "You must be at least 18 years old",
            })
        : z.string().optional(),

    ssn:
      type === "sign-up"
        ? z
            .string()
            .min(9, { message: "SSN must be 9 digits" })
            .max(9, { message: "SSN must be 9 digits" })
        : z.string().optional(),
  });
};

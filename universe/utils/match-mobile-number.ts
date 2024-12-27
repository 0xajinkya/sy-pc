const indian_mobile_regex = /^\d{10}$/;

export const matchMobileNumber = (mobile_number: string) => {
    return mobile_number.match(indian_mobile_regex);
}
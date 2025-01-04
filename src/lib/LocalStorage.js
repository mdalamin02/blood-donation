import toast from "react-hot-toast";

// Function to get users from localStorage
export const getUser = () => {
  let users = [];
  const storedUser = localStorage.getItem("users");
  if (!storedUser) {
    localStorage.setItem("users", JSON.stringify(dummyData));
  } else {
    users = JSON.parse(storedUser);
  }
  return users;
};

// Function to save a user to localStorage
export const saveUser = (user) => {
  const users = getUser();
  const isExist = users.find((data) => data.email === user.email);
  if (isExist) {
    return toast.error("User already exists!");
  }
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  toast.success("User saved successfully!");
};

// Function to delete all users from localStorage
export const deleteUser = () => {
  localStorage.removeItem("users");
  toast.success("All users deleted successfully!");
};

// Dummy JSON data for initialization
const dummyData = [
  {
    name: "Md. Al-Amin",
    location: "Dhaka",
    country: "Bangladesh",
    bloodGroup: "O+",
    phoneNumber: "+8801712345678",
    lastDonationDate: "2024-09-15",
  },
  {
    name: "Rahim Uddin",
    location: "Chattogram",
    country: "Bangladesh",
    bloodGroup: "A+",
    phoneNumber: "+8801812345678",
    lastDonationDate: "2024-10-20",
  },
  {
    name: "Sumaiya Akter",
    location: "Sylhet",
    country: "Bangladesh",
    bloodGroup: "B+",
    phoneNumber: "+8801912345678",
    lastDonationDate: "2024-08-10",
  },
  {
    name: "Tania Rahman",
    location: "Rajshahi",
    country: "Bangladesh",
    bloodGroup: "AB+",
    phoneNumber: "+8801612345678",
    lastDonationDate: "2024-07-30",
  },
  {
    name: "Kamal Hossain",
    location: "Khulna",
    country: "Bangladesh",
    bloodGroup: "O-",
    phoneNumber: "+8801512345678",
    lastDonationDate: "2024-11-01",
  },
  {
    name: "Farhana Islam",
    location: "Barisal",
    country: "Bangladesh",
    bloodGroup: "A-",
    phoneNumber: "+8801712345698",
    lastDonationDate: "2024-09-25",
  },
  {
    name: "Sajid Ahmed",
    location: "Rangpur",
    country: "Bangladesh",
    bloodGroup: "B-",
    phoneNumber: "+8801812345698",
    lastDonationDate: "2024-10-05",
  },
  {
    name: "Rubel Mia",
    location: "Mymensingh",
    country: "Bangladesh",
    bloodGroup: "AB-",
    phoneNumber: "+8801912345698",
    lastDonationDate: "2024-08-15",
  },
];

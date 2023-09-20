import axiosInstance from "@/API Request/axiosconfig";
import { UserIcon } from "@/components/icons";
import Layout from "@/components/layout";
import { useMyStore } from "@/store/store";
import Image from "next/image";
import React, { useState } from "react";

export default function Profile() {
  const { user, updateUser } = useMyStore();

  const [img, setImg] = useState(user?.image);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [email, setEmail] = useState(user?.email);
  const [phoneNumber, setphoneNumber] = useState(user?.phoneNumber);

  const [loading, setLoading] = useState(false);

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImg(reader.result as string);
    };
  };

  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    const data = { email, firstName, lastName, phoneNumber, image: img };
    setLoading(true);

    try {
      const res = await axiosInstance("/user/updateUser", {
        method: "post",
        data,
      });

      updateUser(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center w-full min-h-screen border-t border-gray-200">
        <form
          onSubmit={handleSubmit}
          className="w-[940px] min-h-screen border mt-[106px] rounded-[24px] border-gray-200"
        >
          <p className="text-[32px] mt-[57px] font-semibold ml-[24px]">
            Personal details
          </p>
          <span className="block text-[20px] font-medium ml-[24px]">
            Please review and refresh your details while also discovering how
            they are utilized.
          </span>
          <span className="block mt-[58px] text-[24px] font-semibold ml-[24px]">
            Bio data
          </span>
          <span className="block w-[736px] h-[0.5px] bg-gray-200 ml-[24px] mt-2  "></span>

          {/*  */}
          <div className="relative ml-[24px] mt-[40px] flex flex-col items-center justify-center w-24 h-24 mx-auto overflow-hidden">
            <input
              type="file"
              name="img"
              accept="image/jpeg, image/jpg, image/png"
              onChange={handleImgChange}
              className="absolute inset-0 z-30 rounded-full opacity-0 cursor-pointer"
            />
            {img ? (
              <div className="relative w-24 h-24 rounded-full overflow-clip">
                <Image
                  fill
                  src={img}
                  alt="user-image"
                  className="object-cover w-full h-full"
                />
              </div>
            ) : (
              <UserIcon />
            )}
            <span className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none top-1/2 left-1/2">
              <CameraIcon />
            </span>
          </div>
          {/*  */}

          <div className="flex gap-[120px]">
            <div className="flex ml-[26px] mt-[30px] gap-[5px] flex-col">
              <label htmlFor="" className="text-[16px] font-medium">
                First name
              </label>
              <input
                className=" border-[1px] p-4 border-[#6C6C6C] rounded-[6px] w-[145%] h-[48px]"
                type="text"
                placeholder="John"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="flex ml-[26px] mt-[30px] gap-[5px] flex-col">
              <label htmlFor="" className="text-[16px] font-medium">
                Last name
              </label>
              <input
                className=" border-[1px] p-4 border-[#6C6C6C] rounded-[6px] w-[145%] h-[48px]"
                type="text"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex gap-[120px] mt-[37px]">
            <div className="flex ml-[26px] mt-[30px] gap-[5px] flex-col">
              <label htmlFor="" className="text-[16px] font-medium">
                Email
              </label>
              <input
                className=" border-[1px] p-4 border-[#6C6C6C] rounded-[6px] w-[145%] h-[48px]"
                type="email"
                placeholder="johndoe@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex ml-[26px] mt-[30px] gap-[5px] flex-col">
              <label htmlFor="" className="text-[16px] font-medium">
                Phone number
              </label>
              <input
                className=" border-[1px] p-4 border-[#6C6C6C] rounded-[6px] w-[145%] h-[48px]"
                type="text"
                placeholder="09063498733"
                value={phoneNumber}
                onChange={(e) => setphoneNumber(e.target.value)}
              />
            </div>
          </div>
          <span className="block mt-[58px] text-[24px] font-semibold ml-[24px]">
            Password
          </span>
          <span className="block w-[736px] h-[0.5px] bg-gray-200 ml-[24px] mt-2  "></span>
          <div className="flex ml-[26px] mt-[30px] gap-[5px] flex-col">
            <button
              type="button"
              className="px-4 py-2 font-semibold text-white rounded-lg w-fit bg-secondary"
            >
              Change Password
            </button>
          </div>
          <button
            className="mt-[52px] mb-[70px] w-[536px] flex items-center justify-center ml-[24px] h-[56px] bg-[#FEB737] rounded-[6px] font-semibold"
            disabled={loading}
          >
            {loading ? "Please wait..." : "Save Changes"}
          </button>
        </form>
      </div>
    </Layout>
  );
}

const CameraIcon = () => (
  <svg
    width="22"
    height="18"
    viewBox="0 0 22 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.25 3.09375H16.0625L15.3031 0.965625C15.2507 0.820003 15.1545 0.694129 15.0278 0.605197C14.9011 0.516266 14.7501 0.468613 14.5953 0.46875H7.40469C7.08828 0.46875 6.80469 0.667969 6.69922 0.965625L5.9375 3.09375H2.75C1.71406 3.09375 0.875 3.93281 0.875 4.96875V15.6562C0.875 16.6922 1.71406 17.5312 2.75 17.5312H19.25C20.2859 17.5312 21.125 16.6922 21.125 15.6562V4.96875C21.125 3.93281 20.2859 3.09375 19.25 3.09375ZM11 13.7812C8.92813 13.7812 7.25 12.1031 7.25 10.0312C7.25 7.95937 8.92813 6.28125 11 6.28125C13.0719 6.28125 14.75 7.95937 14.75 10.0312C14.75 12.1031 13.0719 13.7812 11 13.7812ZM8.75 10.0312C8.75 10.628 8.98705 11.2003 9.40901 11.6222C9.83097 12.0442 10.4033 12.2812 11 12.2812C11.5967 12.2812 12.169 12.0442 12.591 11.6222C13.0129 11.2003 13.25 10.628 13.25 10.0312C13.25 9.43451 13.0129 8.86222 12.591 8.44026C12.169 8.0183 11.5967 7.78125 11 7.78125C10.4033 7.78125 9.83097 8.0183 9.40901 8.44026C8.98705 8.86222 8.75 9.43451 8.75 10.0312Z"
      fill="white"
    />
  </svg>
);

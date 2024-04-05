/* input icons */
import UserIcon from "@/icons/auth-icons/user";
import EmailIcon from "@/icons/auth-icons/sms";
import LockIcon from "@/icons/auth-icons/lock";
import Eye from "@/icons/auth-icons/eye";
import GoogleIcon from "@/icons/auth-icons/goole";
import FacebookIcon from "@/icons/auth-icons/google";

const SignUp = () => {
  return (
    <div className="bg-Grandis h-screen">
      {/* title */}
      <div className="pt-7 ml-[34px]">
        <h4 className="text-[30px] font-mono font-bold">create account</h4>
      </div>
      {/* form */}
      <form action="" method="post">
        <div className="mx-auto flex items-center flex-col mt-16">
          <div className="w-[85%] mb-3">
            <div className="absolute mt-[12px] ml-[14px]">
              <UserIcon />
            </div>
            <input
              type="text"
              placeholder="username"
              className="w-full py-3 rounded-xl outline-none pl-11 "
            />
          </div>
          <div className="w-[85%] mb-3">
            <div className="absolute  mt-[12px] ml-[14px]">
              <EmailIcon />
            </div>
            <input
              type="text"
              placeholder="email"
              className="w-full py-3 rounded-xl outline-none pl-11"
            />
          </div>
          <div className="w-[85%] mb-3">
            <div className="absolute mt-[12px] ml-[14px]">
              <LockIcon />
            </div>
            <div className="absolute mt-[12px] ml-[14px] right-[42px]">
              <Eye />
            </div>
            <input
              type="password"
              placeholder="password"
              className="w-full py-3 rounded-xl outline-none pl-11"
            />
          </div>
        </div>
        {/* agree terms */}
        <div className="mt-3 flex ml-10 items-center">
          <div className="mr-2">
            <label className="checkbox-label w-[15px] h-[15px] border-[2px] border-Tenne flex">
              {" "}
              <input type="checkbox" className="hidden" />
            </label>
          </div>
          <span className="text-Tenne text-[14px]">
            i agree to the <span className="text-white font-bold">terms</span>{" "}
            and
            <span className="text-white font-bold"> privacy policy</span>
          </span>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="mt-24 bg-Tenne w-[360px] h-[40px] rounded-xl text-white mx-3"
          >
            sign up
          </button>
        </div>
      </form>
      {/* social media login */}
      <div className="mt-12 flex justify-center">
        <div className="flex flex-col items-center">
          <div className="h-[1px] bg-gray-400 w-[340px]" />
          <span className="-translate-y-[14px] bg-Grandis font-mono">
            or log in with{" "}
          </span>
          <div className="flex">
            <div className="mr-4">
              <GoogleIcon />
            </div>
            <FacebookIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

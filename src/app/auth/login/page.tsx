import Pic1 from "../../../../public/login-image.png";
import Image from "next/image";
import Link from "next/link";

/* input icons */
import UserIcon from "@/icons/auth-icons/user";
import EmailIcon from "@/icons/auth-icons/sms";
import LockIcon from "@/icons/auth-icons/lock";
import Eye from "@/icons/auth-icons/eye";

const SignUp = () => {
  return (
    <div className="bg-Grandis h-screen pt-[90px] relative">
      {/* form */}
      <form action="" method="post">
        <div className="mx-auto flex items-center flex-col">
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
        {/* remember and forgot pass */}
        <div className="mt-3 flex ml-10 items-center justify-between">
          <div className="flex items-center">
            <div className="mr-2">
              <label className="checkbox-label w-[15px] h-[15px] border-[2px] border-Tenne flex">
                {" "}
                <input type="checkbox" className="hidden" id="remember" />
              </label>
            </div>
            <label
              className="text-Tenne text-[11px] select-none"
              htmlFor="remember"
            >
              remember me
            </label>
          </div>
          <Link
            href={"/auth/forgot-pass"}
            className="mr-9 text-Tenne text-[11px]"
          >
            forgot password?
          </Link>
        </div>

        <div className="flex items-center flex-col">
          <button
            type="submit"
            className="mt-9 mb-3 bg-Tenne w-[360px] h-[40px] rounded-xl text-white mx-3"
          >
            login
          </button>
          <span className="text-Tenne font-mono">
            dont have an account? <Link href={"/auth/signup"} className="text-white font-bold font-mono">sign up</Link>
          </span>
        </div>
      </form>

      <div className="flex justify-center mt-4 w-full absolute bottom-0">
        <Image src={Pic1} alt="login image" className="w-[100%]" />
      </div>
    </div>
  );
};

export default SignUp;

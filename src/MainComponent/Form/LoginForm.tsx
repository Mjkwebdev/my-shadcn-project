import { useState } from "react";
import { Button } from "../../components/ui/button";
interface FormData {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <>
      <div className="flex flex-col justify-center px-8">
        <div className="sm:mx-auto sm:w-full bg-[#f5f5f5] p-6 rounded-[11px]">
          <h2 className="text-center text-2xl/9 font-bold tracking-tight text-[#252525]">
            Sign in to your account
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6 mt-12">
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium font-[poppins] text-[#252525]"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter Email Address"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full font-[poppins] font-normal text-xs rounded-[6px] placeholder:text-[#0d0d0d] border border-[#9d9d9d] bg-white px-3 py-1.5 text-[#252525] outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-xs font-medium font-[poppins] text-[#252525]"
              >
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  required
                  autoComplete="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full font-[poppins] font-normal text-xs rounded-[6px] placeholder:text-[#0d0d0d] border border-[#9d9d9d] bg-white px-3 py-1.5 text-[#252525] outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <Button variant={"booknow"}> Sign in</Button>
          </form>
        </div>
      </div>
    </>
  );
}

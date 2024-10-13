import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/Admin/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import { RiArrowRightUpLine } from "@remixicon/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            <div className="max-w-[500px] mx-auto shadow-lg p-8 rounded-lg mb-20">
                {status && (
                    <div className="mb-4 font-medium text-sm text-green-600">
                        {status}
                    </div>
                )}

                <form onSubmit={submit}>
                    <div className="text-center mb-2 font-gilroy">
                        <h1 className="text-3xl font-bold">Log in</h1>
                    </div>
                    <div>
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData("email", e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="block mt-4">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
                            />
                            <span className="ms-2 text-sm text-gray-600">
                                Remember me
                            </span>
                        </label>
                    </div>
                    <div className="text-end my-4">
                        <PrimaryButton
                            text="Log in"
                            className="ms-4 !w-[140px]"
                            disabled={processing}
                        >
                            <RiArrowRightUpLine className="size-[20px]" />
                        </PrimaryButton>
                    </div>
                    <div>
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Forgot password?
                            </Link>
                        )}
                        {/* <span className="mx-2 text-sm text-gray-600">or</span>
                        <Link href={route('social.login', ['google'])}>Sign in with Google</Link>
                        <span className="mx-2 text-sm text-gray-600">or</span>
                        <Link href={route('social.login', ['facebook'])}>Sign in with Facebook</Link>
                        <span className="mx-2 text-sm text-gray-600">or</span>
                        <Link href={route('social.login', ['twitter'])}>Sign in with Twitter</Link>
                        <span className="mx-2 text-sm text-gray-600">or</span>
                        <Link href={route('social.login', ['github'])}>Sign in with GitHub</Link> */}
                    </div>
                    <Link
                        href={route("register")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mr-3"
                    >
                        Don't have an account? Sign up
                    </Link>
                </form>
            </div>
        </GuestLayout>
    );
}

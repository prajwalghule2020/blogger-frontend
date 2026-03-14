"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Mail, Lock, User, ArrowRight, UserPlus, Loader2 } from "lucide-react"
import Link from "next/link"
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"

export function SignupView() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const [formParams, setFormParams] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setFormParams(prev => ({ ...prev, [id]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (formParams.password !== formParams.confirmPassword) {
            setError("Passwords do not match")
            return
        }

        setIsLoading(true)

        try {
            const { data, error: signUpError } = await authClient.signUp.email({
                email: formParams.email,
                password: formParams.password,
                name: `${formParams.firstName} ${formParams.lastName}`.trim(),
            });

            if (signUpError) {
                setError(signUpError.message || "Something went wrong during sign up")
                return
            }

            // Successfully signed up, redirect to login page
            router.push("/sign-in")
        } catch (err: any) {
            setError(err?.message || "An unexpected error occurred")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="bg-[#fdfdfd] min-h-screen flex flex-col items-center justify-center p-4 selection:bg-coral selection:text-white">
            <div className="w-full max-w-md p-6 sm:p-8 bg-white border border-slate-200 rounded-xl shadow-xl relative overflow-hidden">
                {/* Top Highlight Bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-coral/0 via-coral/80 to-coral/0"></div>

                <div className="mb-6 text-center">
                    <div className="inline-flex items-center justify-center size-10 bg-coral rounded-lg text-white mb-4 shadow-md shadow-coral/20">
                        <UserPlus className="w-5 h-5" />
                    </div>
                    <h1 className="text-2xl font-black text-slate-900 tracking-tight mb-1">Create an Account</h1>
                    <p className="text-slate-500 text-sm font-medium">Join Synapse AI</p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <Label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                                First Name
                            </Label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="w-4 h-4 text-slate-400" />
                                </div>
                                <Input
                                    id="firstName"
                                    type="text"
                                    autoComplete="given-name"
                                    required
                                    value={formParams.firstName}
                                    onChange={handleChange}
                                    placeholder="John"
                                    className="pl-9 py-5 bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-1 focus-visible:ring-coral focus-visible:border-coral transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <Label htmlFor="lastName" className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                                Last Name
                            </Label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="w-4 h-4 text-slate-400" />
                                </div>
                                <Input
                                    id="lastName"
                                    type="text"
                                    autoComplete="family-name"
                                    required
                                    value={formParams.lastName}
                                    onChange={handleChange}
                                    placeholder="Doe"
                                    className="pl-9 py-5 bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-1 focus-visible:ring-coral focus-visible:border-coral transition-colors"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <Label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                            Email Address
                        </Label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="w-4 h-4 text-slate-400" />
                            </div>
                            <Input
                                id="email"
                                type="email"
                                autoComplete="email"
                                required
                                value={formParams.email}
                                onChange={handleChange}
                                placeholder="name@company.com"
                                className="pl-9 py-5 bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-1 focus-visible:ring-coral focus-visible:border-coral transition-colors"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                            <Label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                                Password
                            </Label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="w-4 h-4 text-slate-400" />
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    value={formParams.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="pl-9 py-5 bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-1 focus-visible:ring-coral focus-visible:border-coral transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <Label htmlFor="confirmPassword" className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                                Confirm Pwd
                            </Label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="w-4 h-4 text-slate-400" />
                                </div>
                                <Input
                                    id="confirmPassword"
                                    type="password"
                                    autoComplete="new-password"
                                    required
                                    value={formParams.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="pl-9 py-5 bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-1 focus-visible:ring-coral focus-visible:border-coral transition-colors"
                                />
                            </div>
                        </div>
                    </div>

                    {error && (
                        <div className="text-red-600 text-sm font-medium p-3 bg-red-50 border border-red-200 rounded-md">
                            {error}
                        </div>
                    )}

                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="group w-full py-5 text-sm font-bold text-white bg-coral hover:bg-coral-dark focus-visible:ring-coral shadow-lg shadow-coral/20 hover:shadow-coral/30 transition-all mt-2"
                    >
                        {isLoading ? (
                            <span className="flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Creating account...</span>
                        ) : (
                            <span className="flex items-center gap-2">Sign Up <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></span>
                        )}
                    </Button>
                </form>

                <div className="mt-6 pt-5 border-t border-slate-200 text-center">
                    <p className="text-sm text-slate-500">
                        Already have an account?{" "}
                        <Link href="/sign-in" className="font-bold text-coral hover:text-coral-dark transition-colors">
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>

            <div className="mt-6 flex gap-6 text-slate-400 text-xs font-medium">
                <Link href="#" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
                <Link href="#" className="hover:text-slate-600 transition-colors">Contact Support</Link>
            </div>
        </div>
    )
}

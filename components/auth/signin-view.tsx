"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Lock, Edit, ArrowRight, Loader2 } from "lucide-react"
import Link from "next/link"
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"

export function SigninView() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    
    const [formParams, setFormParams] = useState({
        email: "",
        password: "",
        rememberMe: false
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setFormParams(prev => ({ ...prev, [id]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        setIsLoading(true)

        try {
            const { data, error: signInError } = await authClient.signIn.email({
                email: formParams.email,
                password: formParams.password,
                rememberMe: formParams.rememberMe,
            });

            if (signInError) {
                setError(signInError.message || "Invalid credentials")
                return
            }

            router.push("/")
        } catch (err: any) {
            setError(err?.message || "An unexpected error occurred")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="bg-[#fdfdfd] text-slate-900 font-sans selection:bg-coral selection:text-white h-screen flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-sm p-6 sm:p-8 bg-white border border-slate-200 rounded-xl shadow-xl relative overflow-hidden">
                {/* Top Highlight Bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-coral/0 via-coral/80 to-coral/0"></div>

                <div className="mb-6 text-center">
                    <div className="inline-flex items-center justify-center size-10 bg-coral rounded-lg text-white mb-4 shadow-md shadow-coral/20">
                        <Edit className="w-5 h-5" />
                    </div>
                    <h1 className="text-2xl font-black text-slate-900 tracking-tight mb-1">Welcome Back</h1>
                    <p className="text-slate-500 text-sm font-medium">Sign in to your content pipeline</p>
                </div>

                <form className="space-y-4" onSubmit={handleSubmit}>
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

                    <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                                Password
                            </Label>
                            <Link href="#" className="text-xs font-bold text-coral hover:text-coral-dark transition-colors">
                                Forgot password?
                            </Link>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="w-4 h-4 text-slate-400" />
                            </div>
                            <Input
                                id="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                value={formParams.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="pl-9 py-5 bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:ring-1 focus-visible:ring-coral focus-visible:border-coral transition-colors"
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-2 pt-1">
                        <Checkbox 
                            id="remember-me" 
                            checked={formParams.rememberMe}
                            onCheckedChange={(checked) => setFormParams(prev => ({ ...prev, rememberMe: checked as boolean }))}
                            className="border-slate-300 data-[state=checked]:bg-coral data-[state=checked]:text-white focus-visible:ring-coral" 
                        />
                        <label
                            htmlFor="remember-me"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-600 select-none"
                        >
                            Remember me for 30 days
                        </label>
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
                            <span className="flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Signing In...</span>
                        ) : (
                            <span className="flex items-center gap-2">Sign In <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></span>
                        )}
                    </Button>
                </form>

                <div className="mt-6 pt-5 border-t border-slate-200 text-center">
                    <p className="text-sm text-slate-500">
                        Don&apos;t have an account?{" "}
                        <Link href="/sign-up" className="font-bold text-coral hover:text-coral-dark transition-colors">
                            Request access
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

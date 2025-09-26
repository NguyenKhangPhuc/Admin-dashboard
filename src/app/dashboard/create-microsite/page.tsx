'use client';
import { MicrositeAttributes } from '@/app/types/microsite';
import Person2Icon from '@mui/icons-material/Person2';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Introduction from '@/app/components/Introduction';
import Navigation from '@/app/components/Navigation';
import HeroSection from '@/app/components/Hero';
import ProofSection from '@/app/components/Proof';
import HowSection from '@/app/components/How';
import CaseSection from '@/app/components/Case';
import Benefit from '@/app/components/Benefit';
import FAQ from '@/app/components/FAQ';
import CTA from '@/app/components/CTA';
import Footer from '@/app/components/Footer';
import { useMutation, useQuery } from '@tanstack/react-query';
import { createMicrosite, getMe } from '@/app/services';
import { UserAttributes } from '@/app/types';
import { useTokenContext } from '@/app/context/TokenContext';
import { useRouter } from 'next/navigation';

const Home = () => {
    // Get the token from the context
    const { token, setToken } = useTokenContext();
    // Using useRouter to navigate
    const router = useRouter();
    // If the user have not login, redirect them to login page
    useEffect(() => {
        if (!token) {
            router.push('/');
        }
    }, [token])
    // Parts of microsite
    const parts = ['Introduction', 'Navigation', 'Hero Section', 'Proof Section', 'Benefit', 'How Section', 'Case Section', 'FAQ', 'CTA', 'Footer'];
    // Default values to input
    const defaultValue: MicrositeAttributes = {
        title: "", domain: "", styles: "", brand: "", navButton: "",
        navLinks: [
            { href: "", label: "", },
            { href: "", label: "", },
            { href: "", label: "", },
            { href: "", label: "", },
        ],
        hero: { preHeadline: "", headline: "", subheading: "", button: "", },
        proofs: [
            { icon: "", number: "", text: "", },
            { icon: "", number: "", text: "", },
            { icon: "", number: "", text: "", },
        ],
        how: {
            title: "", subtitle: "", steps: [
                { number: 0, title: "", text: "", },
                { number: 0, title: "", text: "", },
                { number: 0, title: "", text: "", },
                { number: 0, title: "", text: "", },
            ],
        },
        cases: {
            title: "",
            subtitle: "",
            items: [
                { quote: "", author: "", result: "", },
                { quote: "", author: "", result: "", },
            ],
            logosTitle: "",
            logos: [''],
        },
        benefits: {
            title: "",
            subtitle: "",
            items: [
                { icon: "", title: "", text: "", },
                { icon: "", title: "", text: "", },
                { icon: "", title: "", text: "", },
                { icon: "", title: "", text: "", },
            ],
        },
        faq: {
            title: "", subtitle: "", items: [
                { q: "", a: "", },
                { q: "", a: "", },
            ],
        },
        cta: {
            title: "",
            button: "",
        },
        footer: {
            sections: [
                {
                    title: "",
                    links: [{ href: "", label: "", }],
                    texts: [""],
                },
                {
                    title: "",
                    links: [{ href: "", label: "", }, { href: "", label: "", },],
                    texts: [""],
                },
                {
                    title: "",
                    links: [{ href: "", label: "", },],
                    texts: [""],
                },
            ],
            copyright: "",
        },
        leads: [],
    }

    // Manage the current part of the microsite
    const [currentPart, setCurrentPart] = useState(0);
    // Get the current user
    const { data: me } = useQuery<UserAttributes>({
        queryKey: ['get_me'],
        queryFn: getMe
    })

    // Create microsite mutation
    const createMicrositeMutation = useMutation({
        mutationKey: ['create_microsite'],
        mutationFn: createMicrosite,
        onSuccess: () => {
            // If create successfully, navigate to manage microsite
            router.push('/dashboard/manage-microsite')
        }
    })
    // React hook form to register, and handleSubmit
    const { register, handleSubmit, formState: { errors } } = useForm<MicrositeAttributes>({
        defaultValues: defaultValue
    })
    // Function to navigate to the next part
    const handleNavigatePart = (type: 'next' | 'previous') => {
        if (type == 'next') {
            setCurrentPart(currentPart + 1)
        } else {
            setCurrentPart(currentPart - 1)
        }
    }

    // Function to create the microsite
    const handleCreateForm = (values: MicrositeAttributes) => {
        createMicrositeMutation.mutate(values)
    }

    // Function to handling error if there exists
    const handleErrors = (index: number) => {
        switch (index) {
            case 0:
                const condition1 = errors.title !== undefined
                const condition2 = errors.domain !== undefined
                const condition3 = errors.brand !== undefined
                const condition4 = errors.navButton !== undefined
                return condition1 || condition2 || condition3 || condition4
            case 1:
                return errors.navLinks !== undefined
            case 2:
                return errors.hero !== undefined
            case 3:
                return errors.proofs !== undefined
            case 4:
                return errors.how !== undefined
            case 5:
                return errors.cases !== undefined
            case 6:
                return errors.benefits !== undefined
            case 7:
                return errors.faq !== undefined
            case 8:
                return errors.cta !== undefined
            case 9:
                return errors.footer !== undefined
            default:
                return false
        }
    }
    return (
        <div className="w-full scroll-smooth min-h-screen">
            <div className='w-full min-h-screen  backdrop-blur-xs'>
                <div className='w-full flex flex-col border border-gray-500 text-white'>
                    <div className="w-full flex gap-2 items-center border-b border-gray-500 font-bold p-5">
                        <Person2Icon />
                        <div className='break-all'> {me?.email}</div>
                    </div>
                    <div className="w-full flex justify-center items-center border-b border-gray-500 font-bold p-5 text-3xl">
                        Create Microsite
                    </div>
                    <div className='w-full flex flex-wrap justify-center'>
                        {parts.map((part, index) => {
                            return (
                                <div
                                    className={`${parts[currentPart] === part && 'bg-black'} cursor-pointer lg:w-1/5 w-1/3 flex justify-center items-center text-center p-5  hover:bg-black/50 ${handleErrors(index) && 'text-red-500'}`}
                                    key={`part ${part}`}
                                    onClick={() => setCurrentPart(index)}
                                >{part}</div>
                            )
                        })}
                    </div>
                    <form className='w-full flex flex-col p-5 gap-5' onSubmit={handleSubmit(handleCreateForm)}>
                        <Introduction isAvailable={parts[currentPart] === 'Introduction'} register={register} errors={errors} />

                        <Navigation isAvailable={parts[currentPart] === 'Navigation'} register={register} errors={errors} />
                        <HeroSection isAvailable={parts[currentPart] === 'Hero Section'} register={register} errors={errors} />
                        <ProofSection isAvailable={parts[currentPart] === 'Proof Section'} register={register} errors={errors} />
                        <HowSection isAvailable={parts[currentPart] === 'How Section'} register={register} errors={errors} />
                        <CaseSection isAvailable={parts[currentPart] === 'Case Section'} register={register} errors={errors} />
                        <Benefit isAvailable={parts[currentPart] === 'Benefit'} register={register} errors={errors} />
                        <FAQ isAvailable={parts[currentPart] === 'FAQ'} register={register} errors={errors} />
                        <CTA isAvailable={parts[currentPart] === 'CTA'} register={register} errors={errors} />
                        <Footer isAvailable={parts[currentPart] === 'Footer'} register={register} errors={errors} />
                        <div className='w-full flex sm:flex-row flex-col justify-end gap-5'>
                            <button
                                type='button'
                                className={`${currentPart <= 0 ? 'bg-[#302e2b] opacity-50' : 'cursor-pointer bg-[#302e2b] hover:bg-[#454441]'} rounded-lg px-15 py-2`}
                                disabled={currentPart <= 0}
                                onClick={() => handleNavigatePart('previous')}
                            >Previous</button>
                            <button
                                type='button'
                                className={`${currentPart >= parts.length - 1 ? 'bg-[#302e2b] opacity-50' : 'cursor-pointer bg-[#302e2b] hover:bg-[#454441]'} rounded-lg px-15 py-2`}
                                disabled={currentPart >= parts.length - 1}
                                onClick={() => handleNavigatePart('next')}
                            >Next</button>
                        </div>
                        <div className='w-full flex justify-end gap-5'>
                            <button
                                type='submit'
                                className='cursor-pointer bg-[#302e2b] hover:bg-[#454441] rounded-lg px-15 py-2'
                            >Submit</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home
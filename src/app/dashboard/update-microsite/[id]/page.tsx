'use client';
import { MicrositeAttributes } from '@/app/types/microsite';
import Person2Icon from '@mui/icons-material/Person2';
import { useState } from 'react';
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
import { getSingleMicrosite, updateMicrosite } from '@/app/services';
import { useParams } from 'next/navigation';

const UpdateForm = ({ microsite }: { microsite: MicrositeAttributes }) => {
    const parts = ['Introduction', 'Navigation', 'Hero Section', 'Proof Section', 'How Section', 'Case Section', 'Benefit', 'FAQ', 'CTA', 'Footer'];
    const [currentPart, setCurrentPart] = useState(0);
    const updateMicrositeMutation = useMutation({
        mutationKey: ['update_mutation'],
        mutationFn: updateMicrosite,
        onSuccess: (data) => {
            console.log('Update successfully', data)
        }
    })
    const { register, handleSubmit, formState: { errors } } = useForm<MicrositeAttributes>({
        defaultValues: microsite
    })
    const handleNavigatePart = (type: 'next' | 'previous') => {
        if (type == 'next') {
            setCurrentPart(currentPart + 1)
        } else {
            setCurrentPart(currentPart - 1)
        }
    }

    const handleUpdateForm = (values: MicrositeAttributes) => {
        console.log(values)
        updateMicrositeMutation.mutate({ micrositeId: microsite.id!, updatedMicrosite: values })
    }


    const handleErrors = (index: number) => {
        switch (index) {
            case 0:
                const condition1 = errors.title !== undefined
                const condition2 = errors.slug !== undefined
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
    if (!microsite) return null
    return (
        <div className="w-full scroll-smooth min-h-screen container">
            <div className='w-full min-h-screen p-10 backdrop-blur-xs'>
                <div className='w-full mx-auto flex flex-col border border-gray-500 text-white'>
                    <div className="w-full flex gap-2 items-center border-b border-gray-500 font-bold p-5">
                        <Person2Icon />
                        <div> Paul</div>
                    </div>
                    <div className="w-full flex justify-center items-center border-b border-gray-500 font-bold p-5 text-3xl">
                        Create Microsite
                    </div>
                    <div className='w-full grid grid-cols-10 '>
                        {parts.map((part, index) => {
                            return (
                                <div
                                    className={`${parts[currentPart] === part && 'bg-[#454441]'} cursor-pointer w-full flex justify-center items-center p-5  hover:bg-[#454441] items-center ${handleErrors(index) && 'text-red-500'}`}
                                    key={`part ${part}`}
                                    onClick={() => setCurrentPart(index)}
                                >{part}</div>
                            )
                        })}
                    </div>
                    <form className='w-full flex flex-col p-5 gap-5' onSubmit={handleSubmit(handleUpdateForm)}>
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
                        <div className='w-full flex justify-end gap-5'>
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
                            >Update</button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


const Home = () => {
    const { id }: { id: string } = useParams()
    const { data: microsite } = useQuery<MicrositeAttributes>({
        queryKey: ['microsite', id],
        queryFn: () => getSingleMicrosite(id)
    })

    if (!microsite) return null
    return (
        <UpdateForm microsite={microsite} />
    )
}

export default Home
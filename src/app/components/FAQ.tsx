import { MicrositeAttributes, Props } from "@/app/types/microsite"

const FAQ = ({ isAvailable, register, errors }: Props<MicrositeAttributes>) => {
    return (
        <>
            <label className={`${isAvailable ? 'block' : 'hidden'} w-full items-center flex flex-col gap-5 `}>
                <div className='text-xl font-bold'>FAQ</div>
                <div className='w-full flex gap-5'>
                    <label className='w-1/2 flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Title</div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg'
                            placeholder='Input title'
                            {...register('faq.title', { required: 'FAQ title is required' })}
                        />
                        {errors.faq?.title && <div className="error_message">{errors.faq.title.message}</div>}
                    </label>
                    <label className='w-1/2 flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Subtitle</div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg'
                            placeholder='Input subtitle'
                            {...register('faq.subtitle', { required: 'FAQ subtitle is required' })}
                        />
                        {errors.faq?.subtitle && <div className="error_message">{errors.faq.subtitle.message}</div>}
                    </label>
                </div>
            </label>
            <label className={`${isAvailable ? 'block' : 'hidden'} w-full items-center flex flex-col gap-5 `}>
                <div className='text-medium font-bold'>Q&A</div>
                <div className='w-full flex gap-5'>
                    <label className='w-1/2 flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Question</div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input question'
                            {...register('faq.items.0.q', { required: 'FAQ question is required' })}
                        />
                        {errors.faq?.items && errors.faq.items[0]?.q && <div className="error_message">{errors.faq.items[0]?.q.message}</div>}
                    </label>
                    <label className='w-1/2 flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Answer</div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input answer'
                            {...register('faq.items.0.a', { required: 'FAQ answer is required' })}
                        />
                        {errors.faq?.items && errors.faq.items[0]?.a && <div className="error_message">{errors.faq.items[0]?.a.message}</div>}
                    </label>
                </div>

                <div className='w-full flex gap-5'>
                    <label className='w-1/2 flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Question</div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input question'
                            {...register('faq.items.1.q', { required: 'FAQ question is required' })}
                        />
                        {errors.faq?.items && errors.faq.items[1]?.q && <div className="error_message">{errors.faq.items[1]?.q.message}</div>}
                    </label>
                    <label className='w-1/2 flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Answer</div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input answer'
                            {...register('faq.items.1.a', { required: 'FAQ answer is required' })}
                        />
                        {errors.faq?.items && errors.faq.items[1]?.a && <div className="error_message">{errors.faq.items[1]?.a.message}</div>}
                    </label>
                </div>
            </label>
        </>
    )
}

export default FAQ
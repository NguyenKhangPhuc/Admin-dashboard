import { MicrositeAttributes, Props } from "@/app/types/microsite"


const CTA = ({ isAvailable, register, errors }: Props<MicrositeAttributes>) => {
    return (
        <label className={`${isAvailable ? 'block' : 'hidden'} w-full items-center flex flex-col gap-5 `}>
            <div className='text-xl font-bold'>CTA</div>
            <div className='w-full flex gap-5'>
                <label className='w-1/2 flex flex-col gap-1'>
                    <div className='text-medium font-bold'>Title</div>
                    <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input title'
                        {...register('cta.title', { required: 'CTA title is required' })}
                    />
                    {errors.cta?.title && <div className="error_message">{errors.cta.title.message}</div>}
                </label>
                <label className='w-1/2 flex flex-col gap-1'>
                    <div className='text-medium font-bold'>Button Title</div>
                    <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input button title'
                        {...register('cta.button', { required: 'CTA button title is required' })}
                    />
                    {errors.cta?.button && <div className="error_message">{errors.cta.button.message}</div>}
                </label>
            </div>
        </label>

    )
}

export default CTA
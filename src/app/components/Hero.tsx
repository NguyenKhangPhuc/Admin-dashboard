import { MicrositeAttributes, Props } from "@/app/types/microsite"

const HeroSection = ({ isAvailable, register, errors }: Props<MicrositeAttributes>) => {

    return (
        <label className={`${isAvailable ? 'block' : 'hidden'} w-full items-center flex flex-col gap-5 `}>
            <div className='text-xl font-bold'>Hero Section </div>
            <div className='w-full flex gap-5'>
                <label className='w-1/2 flex flex-col gap-1'>
                    <div className='text-medium font-bold'>Preheadline </div>
                    <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input preheadline'
                        {...register('hero.preHeadline', { required: 'Preheadline is required' })}
                    />
                    {errors.hero?.preHeadline && <div className="error_message">{errors.hero.preHeadline.message}</div>}
                </label>
                <label className='w-1/2 flex flex-col gap-1'>
                    <div className='text-medium font-bold'>Headline </div>
                    <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input headline'
                        {...register('hero.headline', { required: 'Headline is required' })}
                    />
                    {errors.hero?.headline && <div className="error_message">{errors.hero.headline.message}</div>}
                </label>

            </div>
            <div className='w-full flex gap-5'>
                <label className='w-1/2 flex flex-col gap-1'>
                    <div className='text-medium font-bold'>Subheading </div>
                    <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input subheading'
                        {...register('hero.subheading', { required: 'Subheading is required' })}
                    />
                    {errors.hero?.subheading && <div className="error_message">{errors.hero.subheading.message}</div>}
                </label>
                <label className='w-1/2 flex flex-col gap-1'>
                    <div className='text-medium font-bold'>Button Label </div>
                    <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input button label'
                        {...register('hero.button', { required: 'Button label is required' })}
                    />
                    {errors.hero?.button && <div className="error_message">{errors.hero.button.message}</div>}
                </label>

            </div>
        </label>
    )
}

export default HeroSection
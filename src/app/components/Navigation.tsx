import { MicrositeAttributes, Props } from "@/app/types/microsite"

const Navigation = ({ isAvailable, register, errors }: Props<MicrositeAttributes>) => {

    return (
        <label className={`${isAvailable ? 'block' : 'hidden'} w-full items-center flex flex-col gap-5 `}>
            <div className='text-xl font-bold'>Navigation</div>
            <div className='w-full flex gap-5'>
                <label className='w-1/2 flex flex-col gap-1'>
                    <div className='text-medium font-bold'>Link 1 Title </div>
                    <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input link 1 title'
                        {...register('navLinks.0.label', { required: 'Navigation link 1 is required' })} />
                    {errors.navLinks && errors.navLinks[0]?.label && <div className="error_message">{errors.navLinks[0].label.message}</div>}
                </label>
                <label className='w-1/2 flex flex-col gap-1'>
                    <div className='text-medium font-bold'>Link 2 Title </div>
                    <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input link 2 title'
                        {...register('navLinks.1.label', { required: 'Navigation link 2 is required' })} />
                    {errors.navLinks && errors.navLinks[1]?.label && <div className="error_message">{errors.navLinks[1].label.message}</div>}
                </label>

            </div>
            <div className='w-full flex gap-5'>
                <label className='w-1/2 flex flex-col gap-1'>
                    <div className='text-medium font-bold'>Link 3 Title </div>
                    <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input link 3 title'
                        {...register('navLinks.2.label', { required: 'Navigation link 3 is required' })} />
                    {errors.navLinks && errors.navLinks[2]?.label && <div className="error_message">{errors.navLinks[2].label.message}</div>}
                </label>
                <label className='w-1/2 flex flex-col gap-1'>
                    <div className='text-medium font-bold'>Link 4 Title </div>
                    <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input link 4 title'
                        {...register('navLinks.3.label', { required: 'Navigation link 4 is required' })} />
                    {errors.navLinks && errors.navLinks[3]?.label && <div className="error_message">{errors.navLinks[3].label.message}</div>}
                </label>
            </div>
        </label>
    )
}

export default Navigation
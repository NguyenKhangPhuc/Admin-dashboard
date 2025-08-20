import { MicrositeAttributes, Props } from "@/app/types/microsite"

const Introduction = ({ isAvailable, register, errors }: Props<MicrositeAttributes>) => {

    return (
        <label className={`${isAvailable ? 'block' : 'hidden'} w-full items-center flex flex-col gap-5 `}>
            <div className='text-xl font-bold'>Introduction </div>
            <div className='w-full flex gap-5'>
                <label className='w-1/2 flex flex-col gap-1'>
                    <div className='text-medium font-bold'>Title </div>
                    <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input title'
                        {...register('title', { required: 'Title is required' })}
                    />
                    {errors.title && <div className="error_message">{errors.title.message}</div>}
                </label>
                <label className='w-1/2 flex flex-col gap-1 '>
                    <div className='text-medium font-bold'>Slug </div>
                    <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input Slug'
                        {...register('slug', { required: 'Slug is required' })}
                    />
                    {errors.slug && <div className="error_message">{errors.slug.message}</div>}
                </label>
            </div>
            <div className='w-full flex flex-col'>
                <div className='w-full flex gap-5'>
                    <label className='w-1/2 flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Brand </div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input Brand'
                            {...register('brand', { required: 'Brand is required' })} />
                        {errors.brand && <div className="error_message">{errors.brand.message}</div>}
                    </label>
                    <label className='w-1/2 flex flex-col gap-1 '>
                        <div className='text-medium font-bold'>Button title </div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input button title'
                            {...register('navButton', { required: 'Brand is required' })}
                        />
                        {errors.navButton && <div className="error_message">{errors.navButton.message}</div>}
                    </label>
                </div>
            </div>
        </label>
    )
}


export default Introduction
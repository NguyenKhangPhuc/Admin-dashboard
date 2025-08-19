import { MicrositeAttributes, Props } from "@/app/types/microsite"

const Benefit = ({ isAvailable, register, errors }: Props<MicrositeAttributes>) => {
    return (
        <>
            <label className={`${isAvailable ? 'block' : 'hidden'} w-full items-center flex flex-col gap-5 `}>
                <div className='text-xl font-bold'>Benefits Section</div>
                <div className='w-full flex gap-5'>
                    <label className='w-1/2 flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Title</div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input title'
                            {...register('benefits.title', { required: 'Benefits title is required' })}
                        />
                        {errors.benefits?.title && <div className="error_message">{errors.benefits.title.message}</div>}
                    </label>
                    <label className='w-1/2 flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Subtitle</div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input subtitle'
                            {...register('benefits.subtitle', { required: 'Benefits subtitle is required' })}
                        />
                        {errors.benefits?.subtitle && <div className="error_message">{errors.benefits.subtitle.message}</div>}
                    </label>
                </div>
            </label>
            <label className={`${isAvailable ? 'block' : 'hidden'} w-full items-center flex flex-col gap-5 `}>
                <div className='text-xl font-bold'>Benefits Items</div>
                <div className='w-full flex flex-col'>
                    <div className='w-full flex gap-5'>
                        <label className='w-1/2 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Icon 1</div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input icon'
                                {...register('benefits.items.0.icon', { required: 'Benefits icon 1 is required' })}
                            />
                            {errors.benefits?.items && errors.benefits.items[0]?.icon && <div className="error_message">{errors.benefits.items[0]?.icon.message}</div>}
                        </label>
                        <label className='w-1/2 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Title 1</div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input title'
                                {...register('benefits.items.0.title', { required: 'Benefits title 1 is required' })}
                            />
                            {errors.benefits?.items && errors.benefits.items[0]?.title && <div className="error_message">{errors.benefits.items[0]?.title.message}</div>}
                        </label>
                    </div>

                    <label className='w-full flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Text 1</div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input text'
                            {...register('benefits.items.0.text', { required: 'Benefits text 1 is required' })}
                        />
                        {errors.benefits?.items && errors.benefits.items[0]?.text && <div className="error_message">{errors.benefits.items[0]?.text.message}</div>}
                    </label>
                </div>

                <div className='w-full flex flex-col'>
                    <div className='w-full flex gap-5'>
                        <label className='w-1/2 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Icon 2</div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input icon'
                                {...register('benefits.items.1.icon', { required: 'Benefits icon 2 is required' })}
                            />
                            {errors.benefits?.items && errors.benefits.items[1]?.icon && <div className="error_message">{errors.benefits.items[1]?.icon.message}</div>}
                        </label>
                        <label className='w-1/2 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Title 2</div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input title'
                                {...register('benefits.items.1.title', { required: 'Benefits title 2 is required' })}
                            />
                            {errors.benefits?.items && errors.benefits.items[1]?.title && <div className="error_message">{errors.benefits.items[1]?.title.message}</div>}
                        </label>
                    </div>

                    <label className='w-full flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Text 2</div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input text'
                            {...register('benefits.items.1.text', { required: 'Benefits text 2 is required' })}
                        />
                        {errors.benefits?.items && errors.benefits.items[1]?.text && <div className="error_message">{errors.benefits.items[1]?.text.message}</div>}
                    </label>
                </div>
                <div className='w-full flex flex-col'>
                    <div className='w-full flex gap-5'>
                        <label className='w-1/2 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Icon 3</div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input icon'
                                {...register('benefits.items.2.icon', { required: 'Benefits icon 3 is required' })}
                            />
                            {errors.benefits?.items && errors.benefits.items[2]?.icon && <div className="error_message">{errors.benefits.items[2]?.icon.message}</div>}
                        </label>
                        <label className='w-1/2 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Title 1</div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input title'
                                {...register('benefits.items.2.title', { required: 'Benefits title 3 is required' })}
                            />
                            {errors.benefits?.items && errors.benefits.items[2]?.title && <div className="error_message">{errors.benefits.items[2]?.title.message}</div>}
                        </label>
                    </div>

                    <label className='w-full flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Text 1</div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input text'
                            {...register('benefits.items.2.text', { required: 'Benefits text 3 is required' })}
                        />
                        {errors.benefits?.items && errors.benefits.items[2]?.text && <div className="error_message">{errors.benefits.items[2]?.text.message}</div>}
                    </label>
                </div>
                <div className='w-full flex flex-col'>
                    <div className='w-full flex gap-5'>
                        <label className='w-1/2 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Icon 4</div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input icon'
                                {...register('benefits.items.3.icon', { required: 'Benefits icon 4 is required' })}
                            />
                            {errors.benefits?.items && errors.benefits.items[3]?.icon && <div className="error_message">{errors.benefits.items[3]?.icon.message}</div>}
                        </label>
                        <label className='w-1/2 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Title 1</div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input title'
                                {...register('benefits.items.3.title', { required: 'Benefits title 4 is required' })}
                            />
                            {errors.benefits?.items && errors.benefits.items[3]?.title && <div className="error_message">{errors.benefits.items[3]?.title.message}</div>}
                        </label>
                    </div>

                    <label className='w-full flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Text 1</div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input text'
                            {...register('benefits.items.3.text', { required: 'Benefits text 4 is required' })}
                        />
                        {errors.benefits?.items && errors.benefits.items[3]?.text && <div className="error_message">{errors.benefits.items[3]?.text.message}</div>}
                    </label>
                </div>
            </label>
        </>
    )
}

export default Benefit
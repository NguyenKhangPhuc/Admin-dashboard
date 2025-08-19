import { MicrositeAttributes, Props } from "@/app/types/microsite"

const HowSection = ({ isAvailable, register, errors }: Props<MicrositeAttributes>) => {

    return (
        <>
            <label className={`${isAvailable ? 'block' : 'hidden'} w-full items-center flex flex-col gap-5 `}>
                <div className='text-xl font-bold'>How Section </div>
                <div className='w-full flex gap-5'>
                    <label className='w-1/2 flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Title </div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input title'
                            {...register('how.title', { required: 'Title of how section is required' })}
                        />
                        {errors.how?.title && <div className="error_message">{errors.how.title.message}</div>}
                    </label>
                    <label className='w-1/2 flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Subtitle </div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input subtitle'
                            {...register('how.subtitle', { required: 'Subtitle of how section is required' })} />
                        {errors.how?.subtitle && <div className="error_message">{errors.how.subtitle.message}</div>}
                    </label>
                </div>
            </label>
            <label className={`${isAvailable ? 'block' : 'hidden'} w-full items-center flex flex-col gap-5 `}>
                <div className='text-xl font-bold'>Steps</div>
                <div className='w-full flex flex-col'>
                    <div className='w-full flex gap-5'>
                        <label className='w-1/2 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Number 1</div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input number'
                                {...register('how.steps.0.number', { required: 'Step 1 \'s number is required' })} />
                            {errors.how?.steps && errors.how.steps[0]?.number && <div className="error_message">{errors.how.steps[0].number.message}</div>}

                        </label>
                        <label className='w-1/2 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Title 1</div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input title'
                                {...register('how.steps.0.title', { required: 'Step 1 \'s title is required' })} />
                            {errors.how?.steps && errors.how.steps[0]?.title && <div className="error_message">{errors.how.steps[0].title.message}</div>}
                        </label>
                    </div>

                    <label className='w-full flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Text 1</div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input text'
                            {...register('how.steps.0.text', { required: 'Step 1 \'s text is required' })}
                        />
                        {errors.how?.steps && errors.how.steps[0]?.text && <div className="error_message">{errors.how.steps[0].text.message}</div>}
                    </label>
                </div>

                <div className='w-full flex flex-col'>
                    <div className='w-full flex gap-5'>
                        <label className='w-1/2 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Number 2</div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input number'
                                {...register('how.steps.1.number', { required: 'Step 2 \'s number is required' })} />
                            {errors.how?.steps && errors.how.steps[1]?.number && <div className="error_message">{errors.how.steps[1].number.message}</div>}

                        </label>
                        <label className='w-1/2 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Title 1</div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input title'
                                {...register('how.steps.1.title', { required: 'Step 2 \'s title is required' })} />
                            {errors.how?.steps && errors.how.steps[1]?.title && <div className="error_message">{errors.how.steps[1].title.message}</div>}
                        </label>
                    </div>

                    <label className='w-full flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Text 1</div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input text'
                            {...register('how.steps.1.text', { required: 'Step 2 \'s text is required' })}
                        />
                        {errors.how?.steps && errors.how.steps[1]?.text && <div className="error_message">{errors.how.steps[1].text.message}</div>}
                    </label>
                </div>
                <div className='w-full flex flex-col'>
                    <div className='w-full flex gap-5'>
                        <label className='w-1/2 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Number 3</div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input number'
                                {...register('how.steps.2.number', { required: 'Step 3 \'s number is required' })} />
                            {errors.how?.steps && errors.how.steps[2]?.number && <div className="error_message">{errors.how.steps[2].number.message}</div>}

                        </label>
                        <label className='w-1/2 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Title 3</div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input title'
                                {...register('how.steps.2.title', { required: 'Step 3 \'s title is required' })} />
                            {errors.how?.steps && errors.how.steps[2]?.title && <div className="error_message">{errors.how.steps[2].title.message}</div>}
                        </label>
                    </div>

                    <label className='w-full flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Text 3</div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input text'
                            {...register('how.steps.2.text', { required: 'Step 3 \'s text is required' })}
                        />
                        {errors.how?.steps && errors.how.steps[2]?.text && <div className="error_message">{errors.how.steps[2].text.message}</div>}
                    </label>
                </div>
                <div className='w-full flex flex-col'>
                    <div className='w-full flex gap-5'>
                        <label className='w-1/2 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Number 4</div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input number'
                                {...register('how.steps.3.number', { required: 'Step 4 \'s number is required' })} />
                            {errors.how?.steps && errors.how.steps[3]?.number && <div className="error_message">{errors.how.steps[3].number.message}</div>}

                        </label>
                        <label className='w-1/2 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Title 3</div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input title'
                                {...register('how.steps.3.title', { required: 'Step 4 \'s title is required' })} />
                            {errors.how?.steps && errors.how.steps[3]?.title && <div className="error_message">{errors.how.steps[3].title.message}</div>}
                        </label>
                    </div>

                    <label className='w-full flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Text 3</div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input text'
                            {...register('how.steps.3.text', { required: 'Step 4 \'s text is required' })}
                        />
                        {errors.how?.steps && errors.how.steps[3]?.text && <div className="error_message">{errors.how.steps[3].text.message}</div>}
                    </label>
                </div>
            </label>
        </>
    )
}

export default HowSection
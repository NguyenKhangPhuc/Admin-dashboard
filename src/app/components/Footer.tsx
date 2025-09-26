import { MicrositeAttributes, Props } from "@/app/types/microsite"

const Footer = ({ isAvailable, register, errors }: Props<MicrositeAttributes>) => {
    return (
        <>
            <label className={`${isAvailable ? 'block' : 'hidden'} w-full items-center flex flex-col gap-5 `}>
                <div className='text-xl font-bold'>Footer</div>
                <label className='w-full flex flex-col gap-1'>
                    <div className='text-medium font-bold'>Copyright</div>
                    <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input copyright'
                        {...register('footer.copyright', { required: 'Footer Copyright is required' })}
                    />
                    {errors.footer?.copyright && <div className="error_message">{errors.footer.copyright.message}</div>}
                </label>
            </label>
            <label className={`${isAvailable ? 'block' : 'hidden'} w-full items-center flex flex-col gap-5 `}>
                <div className='text-medium font-bold'>Footer Section</div>
                <div className='w-full flex flex-col'>
                    <label className='w-full flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Title</div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input title'
                            {...register('footer.sections.0.title', { required: 'Footer title is required' })}
                        />
                        {errors.footer?.sections && errors.footer.sections[0]?.title && <div className="error_message">{errors.footer.sections[0]?.title.message}</div>}
                    </label>
                </div>

                <div className='w-full flex flex-col'>
                    <div className='w-full flex gap-5'>
                        <label className='w-1/2 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Link 1</div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input link'
                                {...register('footer.sections.1.links.0.label', { required: 'Footer section 2 link 1 is required' })}
                            />
                            {errors.footer?.sections && errors.footer.sections[1] && errors.footer.sections[1].links &&
                                errors.footer.sections[1].links[0]?.label &&
                                <div className="error_message">{errors.footer.sections[1].links[0].label.message}</div>}
                        </label>
                        <label className='w-1/2 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Link 2</div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input link'
                                {...register('footer.sections.1.links.1.label', { required: 'Footer section 2 link 2 is required' })}
                            />
                            {errors.footer?.sections && errors.footer.sections[1] && errors.footer.sections[1].links &&
                                errors.footer.sections[1].links[1]?.label &&
                                <div className="error_message">{errors.footer.sections[1].links[1].label.message}</div>}
                        </label>
                    </div>

                    <label className='w-full flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Title</div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input title'
                            {...register('footer.sections.1.title', { required: 'Footer section 2 title is required' })}
                        />
                        {errors.footer?.sections && errors.footer.sections[1]?.title && <div className="error_message">{errors.footer.sections[1]?.title.message}</div>}
                    </label>
                </div>
                <div className='w-full flex flex-col'>
                    <div className='w-full flex gap-5'>
                        <label className='w-1/2 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Text 1</div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input text'
                                {...register('footer.sections.2.texts.0', { required: 'Footer section 3 text 1 is required' })}
                            />
                            {errors.footer?.sections && errors.footer.sections[2] && errors.footer.sections[2].texts &&
                                errors.footer.sections[2].texts[0] &&
                                <div className="error_message">{errors.footer.sections[2].texts[0].message}</div>}
                        </label>
                        <label className='w-1/2 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Text 2</div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input text'
                                {...register('footer.sections.2.texts.1', { required: 'Footer section 3 text 2 is required' })}
                            />
                            {errors.footer?.sections && errors.footer.sections[2] && errors.footer.sections[2].texts &&
                                errors.footer.sections[2].texts[1] &&
                                <div className="error_message">{errors.footer.sections[2].texts[1].message}</div>}
                        </label>
                        <label className='w-1/2 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Text 3</div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input text'
                                {...register('footer.sections.2.texts.2', { required: 'Footer section 3 text 3 is required' })}
                            />
                            {errors.footer?.sections && errors.footer.sections[2] && errors.footer.sections[2].texts &&
                                errors.footer.sections[2].texts[2] &&
                                <div className="error_message">{errors.footer.sections[2].texts[2].message}</div>}
                        </label>
                    </div>

                    <label className='w-full flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Title</div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input title'
                            {...register('footer.sections.2.title', { required: 'Footer section 3 title is required' })}
                        />
                        {errors.footer?.sections && errors.footer.sections[2]?.title && <div className="error_message">{errors.footer.sections[2]?.title.message}</div>}
                    </label>
                </div>
            </label>
        </>
    )
}

export default Footer
import { MicrositeAttributes, Props } from "@/app/types/microsite"

const CaseSection = ({ isAvailable, register, errors }: Props<MicrositeAttributes>) => {

    return (
        <>
            <label className={`${isAvailable ? 'block' : 'hidden'} w-full items-center flex flex-col gap-5 `}>
                <div className='text-xl font-bold'>Cases Section</div>
                <div className='w-full flex flex-col'>
                    <div className='w-full flex gap-5'>
                        <label className='w-1/2 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Title </div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input title'
                                {...register('cases.title', { required: 'Case title is required' })}
                            />
                            {errors.cases?.title && <div className="error_message">{errors.cases.title.message}</div>}
                        </label>
                        <label className='w-1/2 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Subtitle </div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input subtitle'
                                {...register('cases.subtitle', { required: 'Case subtitle is required' })}
                            />
                            {errors.cases?.subtitle && <div className="error_message">{errors.cases.subtitle.message}</div>}
                        </label>
                    </div>

                    <label className='w-full flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Logo Title </div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input logo title'
                            {...register('cases.logosTitle', { required: 'Case logo title is required' })}
                        />
                        {errors.cases?.logosTitle && <div className="error_message">{errors.cases.logosTitle.message}</div>}
                    </label>
                </div>
            </label>
            <label className={`${isAvailable ? 'block' : 'hidden'} w-full items-center flex flex-col gap-5 `}>
                <div className='text-xl font-bold'>Case Items </div>
                <div className='w-full flex flex-col'>


                    <div className='w-full flex gap-5'>
                        <label className='w-1/2 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Quote 1 </div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input quote'
                                {...register('cases.items.0.quote', { required: 'Case quote 1 is required' })}
                            />
                            {errors.cases?.items && errors.cases.items[0]?.quote && <div className="error_message">{errors.cases.items[0]?.quote.message}</div>}
                        </label>
                        <label className='w-1/2 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Author 1</div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input author'
                                {...register('cases.items.0.author', { required: 'Case author 1 is required' })}
                            />
                            {errors.cases?.items && errors.cases.items[0]?.author && <div className="error_message">{errors.cases.items[0]?.author.message}</div>}
                        </label>
                    </div>

                    <label className='w-full flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Result 1</div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input result'
                            {...register('cases.items.0.result', { required: 'Case result 1 is required' })}
                        />
                        {errors.cases?.items && errors.cases.items[0]?.result && <div className="error_message">{errors.cases.items[0]?.result.message}</div>}
                    </label>
                </div>

                <div className='w-full flex flex-col'>


                    <div className='w-full flex gap-5'>
                        <label className='w-1/2 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Quote 2 </div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input quote'
                                {...register('cases.items.1.quote', { required: 'Case quote 2 is required' })}
                            />
                            {errors.cases?.items && errors.cases.items[1]?.quote && <div className="error_message">{errors.cases.items[1]?.quote.message}</div>}
                        </label>
                        <label className='w-1/2 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Author 2</div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input author'
                                {...register('cases.items.1.author', { required: 'Case author 2 is required' })}
                            />
                            {errors.cases?.items && errors.cases.items[1]?.author && <div className="error_message">{errors.cases.items[1]?.author.message}</div>}
                        </label>
                    </div>

                    <label className='w-full flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Result 2</div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input result'
                            {...register('cases.items.1.result', { required: 'Case result 2 is required' })}
                        />
                        {errors.cases?.items && errors.cases.items[1]?.result && <div className="error_message">{errors.cases.items[1]?.result.message}</div>}
                    </label>
                </div>
                <div className='w-full flex flex-col'>
                    <div className='w-full flex gap-5'>
                        <label className='w-1/3 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Logo 1</div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input Logo'
                                {...register('cases.logos.0', { required: 'Case logo 1 is required' })}
                            />
                            {errors.cases?.logos && errors.cases.logos[0] && <div className="error_message">{errors.cases.logos[0].message}</div>}
                        </label>
                        <label className='w-1/3 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Logo 2</div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input Logo'
                                {...register('cases.logos.1', { required: 'Case logo 2 is required' })}
                            />
                            {errors.cases?.logos && errors.cases.logos[1] && <div className="error_message">{errors.cases.logos[1].message}</div>}
                        </label>
                        <label className='w-1/3 flex flex-col gap-1'>
                            <div className='text-medium font-bold'>Logo 3</div>
                            <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input Logo'
                                {...register('cases.logos.2', { required: 'Case logo 3 is required' })}
                            />
                            {errors.cases?.logos && errors.cases.logos[2] && <div className="error_message">{errors.cases.logos[2].message}</div>}
                        </label>
                    </div>
                </div>
            </label>
        </>
    )
}

export default CaseSection
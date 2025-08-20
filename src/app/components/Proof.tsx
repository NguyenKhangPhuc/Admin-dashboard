import { MicrositeAttributes, Props } from "@/app/types/microsite"

const ProofSection = ({ isAvailable, register, errors }: Props<MicrositeAttributes>) => {

    return (
        <label className={`${isAvailable ? 'block' : 'hidden'} w-full items-center flex flex-col gap-5 `}>
            <div className='text-xl font-bold'>Proof Section </div>
            <div className='w-full flex flex-col'>
                <div className='w-full flex gap-5'>
                    <label className='w-1/2 flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Icon 1</div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input icon'
                            {...register('proofs.0.icon', { required: 'Proof icon 1 is required' })}
                        />
                        {errors.proofs && errors.proofs[0]?.icon && <div className="error_message">{errors.proofs[0].icon.message}</div>}
                    </label>
                    <label className='w-1/2 flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Number 1</div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input number'
                            {...register('proofs.0.number', { required: 'Proof number 1 is required' })}
                        />
                        {errors.proofs && errors.proofs[0]?.number && <div className="error_message">{errors.proofs[0].number.message}</div>}
                    </label>
                </div>

                <label className='w-full flex flex-col gap-1'>
                    <div className='text-medium font-bold'>Text 1</div>
                    <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input text'
                        {...register('proofs.0.text', { required: 'Proof text 1 is required' })}
                    />
                    {errors.proofs && errors.proofs[0]?.text && <div className="error_message">{errors.proofs[0].text.message}</div>}
                </label>
            </div>

            <div className='w-full flex flex-col'>
                <div className='w-full flex gap-5'>
                    <label className='w-1/2 flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Icon 2</div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input icon'
                            {...register('proofs.1.icon', { required: 'Proof icon 2 is required' })}
                        />
                        {errors.proofs && errors.proofs[1]?.icon && <div className="error_message">{errors.proofs[1].icon.message}</div>}
                    </label>
                    <label className='w-1/2 flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Number 1</div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input number'
                            {...register('proofs.1.number', { required: 'Proof number 2 is required' })}
                        />
                        {errors.proofs && errors.proofs[1]?.number && <div className="error_message">{errors.proofs[1].number.message}</div>}
                    </label>
                </div>

                <label className='w-full flex flex-col gap-1'>
                    <div className='text-medium font-bold'>Text 1</div>
                    <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input text'
                        {...register('proofs.1.text', { required: 'Proof text 2 is required' })}
                    />
                    {errors.proofs && errors.proofs[1]?.text && <div className="error_message">{errors.proofs[1].text.message}</div>}
                </label>
            </div>
            <div className='w-full flex flex-col'>
                <div className='w-full flex gap-5'>
                    <label className='w-1/2 flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Icon 3</div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input icon'
                            {...register('proofs.2.icon', { required: 'Proof icon 3 is required' })}
                        />
                        {errors.proofs && errors.proofs[2]?.icon && <div className="error_message">{errors.proofs[2].icon.message}</div>}
                    </label>
                    <label className='w-1/2 flex flex-col gap-1'>
                        <div className='text-medium font-bold'>Number 1</div>
                        <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input number'
                            {...register('proofs.2.number', { required: 'Proof number 3 is required' })}
                        />
                        {errors.proofs && errors.proofs[2]?.number && <div className="error_message">{errors.proofs[2].number.message}</div>}
                    </label>
                </div>

                <label className='w-full flex flex-col gap-1'>
                    <div className='text-medium font-bold'>Text 1</div>
                    <input className='w-full px-5 py-1 border border-gray-400 rounded-lg' placeholder='Input text'
                        {...register('proofs.2.text', { required: 'Proof text 3 is required' })}
                    />
                    {errors.proofs && errors.proofs[2]?.text && <div className="error_message">{errors.proofs[2].text.message}</div>}
                </label>
            </div>
        </label>
    )
}


export default ProofSection
const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
    return (
        <div className='flex gap-4 mt-4'>
            <div className='form-control'>
                <label className='label gap-2 cursor-pointer'>
                    <span className='label-text'>Male</span>
                    <input
                        type='radio'
                        name='gender'
                        className='radio border-slate-900'
                        checked={selectedGender === "male"}
                        onChange={() => onCheckboxChange("male")}
                    />
                </label>
            </div>
            <div className='form-control'>
                <label className='label gap-2 cursor-pointer'>
                    <span className='label-text'>Female</span>
                    <input
                        type='radio'
                        name='gender'
                        className='radio border-slate-900'
                        checked={selectedGender === "female"}
                        onChange={() => onCheckboxChange("female")}
                    />
                </label>
            </div>
        </div>
    );
};

export default GenderCheckbox;

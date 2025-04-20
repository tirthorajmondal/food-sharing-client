
const FeaturedFoods = () => {
    const gridStyle = { display: 'grid', gridTemplateColums: '' }
    return (
        <div className="flex gap-4" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
            <div className="bg-red-200 font-bold p-4" >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quam aliquam adipisci.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quam aliquam adipisci.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quam aliquam adipisci.</p>
            </div>
            <div className="bg-red-200 font-bold p-4" >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quam aliquam adipisci.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quam aliquam adipisci.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quam aliquam adipisci.</p>
            </div>
            <div className="bg-red-200 font-bold p-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quam aliquam adipisci.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quam aliquam adipisci.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quam aliquam adipisci.</p>
            </div>
        </div>
    );
};

export default FeaturedFoods;
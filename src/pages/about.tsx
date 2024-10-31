import dwarve from '/dwarve.jpg'

export default function About() {
    return (
        <div className='col-lg-12 text-center mt-4 align-items-center d-flex flex-column'>
            <h1>we are GearHub!</h1>
            <p>we sell the finest equipment in all the lands! made by people, dwarves and elves alike, you are sure to find something suited for your adventure here!</p>
            <div className='col-lg-7'>
                <img src={dwarve} alt="" width={"100%"} className='border rounded border-dark' />
            </div>
        </div>
    )
}

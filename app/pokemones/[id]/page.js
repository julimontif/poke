const Pokemon = () => {
    return (
        <p>lala</p>
    )
}

export default Pokemon

export const getServerSideProps = async ({params}) => {
    console.log(params)
    return {props: {}}
}
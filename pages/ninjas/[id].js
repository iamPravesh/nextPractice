export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString() }
        }
    })
    return {
        paths,
        fallback: false // fallback to 404 page
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        props: {
            ninja: data
        }
    }
}

const NinjaDetail = ({ ninja }) => {
    return (
        <div>
            <h1>Ninja Detail</h1>
            <h3>{ninja.name}</h3>
            <p>{ninja.email}</p>
            <p>{ninja.address.city}</p>
            <p>{ninja.website}</p>
        </div>
    );
}

export default NinjaDetail;
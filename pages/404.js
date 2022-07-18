import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router'

const ErrorPage = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, [])

    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Page not found</p>
            <p>Go back to the <Link href="/"><a>HOME</a></Link></p>
        </div>
    );
}

export default ErrorPage;
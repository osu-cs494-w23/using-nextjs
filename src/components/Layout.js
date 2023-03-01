import Navbar from '@/components/Navbar'

export default function Layout(props) {
    return (
        <>
            <Navbar />
            {props.children}
        </>
    )
}

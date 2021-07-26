import {Button} from 'antd'
export function Home() {
	return (
		<>
			<Button size="large" className="ms-1" href="/actor-getlist"> Actor</Button>
			<Button size="large" className="ms-1" href="/customer-getlist"> Customer</Button>
		</>
	);
}

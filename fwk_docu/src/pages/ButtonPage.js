import Button from '../components/Button'
import { GoStar, GoSync } from "react-icons/go";

const ButtonPage = () => {
    return(
        <div className='grid grid-cols-9 gap-1'>
            <div className='grid grid-rows-6 grid-flow-col gap-2'>
                <div>
                    <Button>
                        <GoStar className='mr-1' />
                        Plain
                    </Button>
                </div>
                <div>
                    <Button primary>Primary</Button>
                </div>
                <div>
                    <Button secondary>Secondary</Button>
                </div>
                <div>
                    <Button success>Success</Button>
                </div>
                <div>
                    <Button warning outlined>Warning</Button>
                </div>
                <div>
                    <Button danger>Danger</Button>   
                </div>
            </div>
            <div className='grid grid-rows-6 grid-flow-col gap-2'>
                <div>
                    <Button rounded>Plain</Button>
                </div>
                <div>
                    <Button primary rounded>Primary</Button>
                </div>
                <div>
                    <Button secondary rounded>Secondary</Button>
                </div>
                <div>
                    <Button success rounded>Success</Button>
                </div>
                <div>
                    <Button warning outlined rounded>Warning</Button>
                </div>
                <div>
                    <Button danger rounded>Danger</Button>   
                </div>
            </div>
            <div className='grid grid-rows-6 grid-flow-col gap-2'>
                <div>
                    <Button rounded outlined>Plain</Button>
                </div>
                <div>
                    <Button primary rounded outlined>
                        <GoSync className='mr-1'/>
                        Primary
                    </Button>
                </div>
                <div>
                    <Button secondary rounded outlined>Secondary</Button>
                </div>
                <div>
                    <Button success rounded outlined>Success</Button>
                </div>
                <div>
                    <Button warning rounded outlined>Warning</Button>
                </div>
                <div>
                    <Button danger rounded outlined>Danger</Button>   
                </div>
            </div>
            <div className='grid grid-rows-6 grid-flow-col gap-2'>
                <div>
                    <Button outlined>Plain</Button>
                </div>
                <div>
                    <Button primary outlined>Primary</Button>
                </div>
                <div>
                    <Button secondary outlined>Secondary</Button>
                </div>
                <div>
                    <Button success outlined>Success</Button>
                </div>
                <div>
                    <Button warning outlined>Warning</Button>
                </div>
                <div>
                    <Button danger outlined>Danger</Button>   
                </div>
            </div>
        </div>
    )
}

export default ButtonPage
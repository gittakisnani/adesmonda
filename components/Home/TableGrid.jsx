import React from 'react'
import Container from '../Container'
import Table from '../Table/Table'
import DiningTable from '../../public/assets/images/DiningTable.svg'
import CoffeTable from '../../public/assets/images/CoffeTable.svg'
import ConsoleTable from '../../public/assets/images/ConsoleTable.svg'
import CafeBarTable from '../../public/assets/images/CafeBarTable.svg'
import SpecialWork from '../../public/assets/images/SpecialWork.svg'
import TissueBox from '../../public/assets/images/TissueBox.svg'
const TableGrid = () => {
  return (
    <section>
    <Container className='!p-10 grid grid-cols-4 lg:grid-cols-6 gap-4'>
        <Table src={DiningTable} text='Dining Table' />
        <Table src={CafeBarTable} text='Cafe And Bar Table' />
        <Table src={ConsoleTable} text='Console Table' />
        <Table src={SpecialWork} text='Special Work' />
        <Table src={TissueBox} text='Tissue Box' />
        <Table src={CoffeTable} text='Coffee Table' />
    </Container>
    </section>
  )
}

export default TableGrid
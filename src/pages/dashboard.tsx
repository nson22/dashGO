import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false,
  },
  tooltip:{
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks:{
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-04-05T00:00:00.000Z',
      '2021-04-06T00:00:00.000Z',
      '2021-04-07T00:00:00.000Z',
      '2021-04-08T00:00:00.000Z',
      '2021-04-09T00:00:00.000Z',
      '2021-04-10T00:00:00.000Z',
      '2021-04-11T00:00:00.000Z'
    ]
  },
  fill:{
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7, 
      opacityTo: 0.3, 
    }
  }
}

const series = [
  { name: 'series1', data: [51, 59, 69, 55, 79, 99, 69]}
]

export default function Dashboard(){

  return(
    <Flex direction='column' height='100vh'>
      <Header />
      <Flex width='100%' marginY='6' maxWidth={1480} marginX='auto' paddingX='6'>
        <Sidebar />
        <SimpleGrid flex='1' gap='4' minChildWidth='320px' align='flex-start'>
          <Box padding='8' paddingBottom='4' backgroundColor='gray.800' borderRadius={8}>
            <Text fontSize='lg' marginBottom='4'>Inscritos da semana</Text>
            <Chart type='area' options={options} series={series} height={160}/>
          </Box>
          <Box padding='8' backgroundColor='gray.800' borderRadius={8}>
            <Text fontSize='lg' marginBottom='4'>Taxa de abertura</Text>
            <Chart type='area' options={options} series={series} height={160}/>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}
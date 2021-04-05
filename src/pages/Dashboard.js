import { createUseStyles } from 'react-jss'
import { Line, Bar, Doughnut  } from 'react-chartjs-2'
import { useState } from 'react'

import InfoCard from '../components/InfoCard'
import Button from '../components/Button'
import Grouped from '../components/Grouped'
import Text from '../components/Text'
import PageContainer from '../components/PageContainer'
import useViewport from '../hooks/useViewPort'

const useStyles = createUseStyles({
   gridLayout: {
      height: '80%',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr 1fr',
      gridTemplateRows: '1fr 1fr',
      gridTemplateAreas: `
         'infoCard1 infoCard2 infoCard3 infoCard4'
         'infoCard5 infoCard5 infoCard5 infoCard4'`
   },
   '@media (max-width: 720px)': {
      gridLayout: {
         gridTemplateColumns: '1fr',
         gridTemplateRows: '1fr 1fr 1fr 1fr 1fr',
         gridTemplateAreas: `
            'infoCard1'
            'infoCard2'
            'infoCard3'
            'infoCard4'
            'infoCard5'`
      }
   },

   dataText: {
      fontSize: 54,
      fontWeight: 800,

   }
})

const LABEL = ['Jan', 'Feb', 'March', 'April', 'May', 'June']

const confirmData = {
      label: 'Confirmed',
      data: [12, 19, 3, 5, 52, 34],
      backgroundColor: [
         'rgba(255, 99, 132, 1)',
     ],
     bordercolor: [
         'rgba(255, 99, 132, 1)'
     ],
     borderwidth: 2
   }
  
const activeData = {
      label: 'Active',
      data: [2, 19, 3, 25, 2, 60],
      backgroundColor: [
         'rgba(108, 222, 245, 1)',
     ],
     bordercolor: [
         'rgba(54, 162, 235, 1)'
     ],
     borderwidth: 1
   }

   const deceasedData = {
      label: 'Deceased',
      data: [60, 19, 3, 21, 22, 30],
      backgroundColor: [
         'rgba(144, 158, 141, 1)',
     ],
     bordercolor: [
         'rgba(124, 138, 121, 1)'
     ],
     borderwidth: 1
   }

   const recoveredData = {
      label: 'Active',
      data: [2, 19, 3, 25, 2, 60],
      backgroundColor: [
         'rgba(114, 207, 135, 1)',
     ],
     bordercolor: [
         'rgba(65, 156, 86, 1)'
     ],
     borderwidth: 1
   }

   const topFiveStateData = {
      data: [60,25,30,40,20],
      backgroundColor: [
         'rgba(252, 30, 34,1)',
         'rgba(212, 47, 50,1)',
         'rgba(214, 69, 71,1)',
         'rgba(237, 95, 97,1)',
         'rgba(247, 131, 133,1)'
      ]
   }

   const topFiveStateRecoveredData = {
      data: [58,65,40,48,36],
      backgroundColor: [
         'rgba(43, 171, 240,1)',
         'rgba(16, 151, 224,1)',
         'rgba(107, 194, 242,1)',
         'rgba(81, 184, 240,1)',
         'rgba(143, 210, 247,1)'
      ]
   }

   const testedData = {
      label: 'Tested',
      data: [10, 20,30,40,90],
      bordercolor: [
         'rgba(69, 131, 186, 1)'
     ],
     backgroundColor: ['rgba(69, 131, 186, 0.5)'],
     borderWidth: 10
   }

   const vaccinatedData = {
      label: 'Vaccinated',
      data: [0,20,90,110,150],
      bordercolor: [
         'rgba(211, 94, 230, 1)'
     ],
     backgroundColor: ['rgba(211, 94, 230, 0.5)'],
     borderWidth: 10
   }



const Dashboard = () => {
   const classes = useStyles()
   const [ selectedCAData, setSelectedCAData ] = useState(confirmData)
   const [ selectedDRData, setSelectedDRData ] = useState(recoveredData)

   const isSmallScreen = useViewport('(max-width: 760px)')

   const options = {
      maintainAspectRatio: true,
      scales: {
         xAxes: [{
            display: false,
            stacked: true,
            gridLines: {
                display: false
            }
        }],
        yAxes: [{
         ticks: {
            beginAtZero: true
        },
         display: false,
            gridLines: {
               display: false,
            }   
        }]
     },
     tooltips: {
      mode: 'index',
      intersect: false
      },
      hover: {
         mode: 'index',
         intersect: false
      },
      legend: {
         display: false
      }
   }

   const showActiveData = () => setSelectedCAData(activeData)
   const showConfirmedData = () => setSelectedCAData(confirmData)
   const showDeceasedData = () => setSelectedDRData(deceasedData)
   const showRecoveredData = () => setSelectedDRData(recoveredData)

   return (
      <PageContainer>
         <div className={classes.gridLayout}>
            <InfoCard gridArea="infoCard1">
               <Grouped>
                  <Button
                     color="rgb(255, 99, 132)"
                     variant="bullet"
                     name="Confirmed"
                     onClick={showConfirmedData}
                  />
                  <Button
                     color="rgba(54, 162, 235)"
                     variant="bullet"
                     name="Active"
                     onClick={showActiveData}
                  />
               </Grouped>
               <br/>
               <Text color={selectedCAData.bordercolor} variant="big" bold>85,000</Text>
               <Text color={selectedCAData.bordercolor} variant="small">cases confirmed</Text>
               <Line 
                  data={{
                     labels: LABEL,
                     datasets: [selectedCAData]
                  }}
                  options={options}
               />
            </InfoCard>
            <InfoCard gridArea="infoCard2">
               <Grouped>
                  <Button
                     color="rgba(57, 217, 17)"
                     variant="bullet"
                     name="Recovered"
                     onClick={showRecoveredData}
                  />
                  <Button
                     color="rgba(144, 158, 141, 1)"
                     variant="bullet"
                     name="Deceased"
                     onClick={showDeceasedData}
                  />
               </Grouped>
               <br/>
               <Text color={selectedDRData.bordercolor} variant="big" bold>85,000</Text>
               <Text color={selectedDRData.bordercolor} variant="small">people recovered</Text>
               <Line 
                  data={{
                     labels: LABEL,
                     datasets: [selectedDRData]
                  }}
                  options={options}
               />
            </InfoCard>
            <InfoCard justifyContent="flex-start" gridArea="infoCard3">
               <Text color="#8c9196" bold>Top 5 states with confirmed & recovered Covid-19 cases.</Text>
               <br />
               <br />
               <Doughnut 
                  data={{
                     labels: [ 'Maharastra', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'Tamil Nadu'],
                     datasets: [topFiveStateData]
                  }}
                  options={{
                     ...options,
                     legend: {
                        display: true,
                        position: 'right',
                     }
                  }}
               />
               <Doughnut 
                  data={{
                     labels: [ 'Maharastra', 'Kerala', 'Karnataka', 'Andhra Pradesh', 'Tamil Nadu'],
                     datasets: [topFiveStateRecoveredData]
                  }}
                  options={{
                     ...options,
                     legend: {
                        display: true,
                        position: 'right',
                     }
                  }}
               /> 
            </InfoCard>
            <InfoCard gridArea="infoCard4"/>
            <InfoCard gridArea="infoCard5">
               <Text color={vaccinatedData.bordercolor} bold>Vaccine doses administered</Text>
               <Text color={vaccinatedData.bordercolor} bold variant="big">40,83,100</Text>
               <Line 
                  data={{
                     labels: LABEL,
                     datasets: [testedData, vaccinatedData]
                  }}
                  height={isSmallScreen ? 100 : 80}
                  options={{
                     ...options,
                     legend: {
                        display: true,
                        position: isSmallScreen ? 'bottom' : 'left',
                     }
                  }}
               />
            </InfoCard>
         </div>
      </PageContainer>
   )
}

export default Dashboard

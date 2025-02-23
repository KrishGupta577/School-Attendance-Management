import AttendanceChart from '@/components/AttendanceChart'
import CountChart from '@/components/CountChart'
import EventCalender from '@/components/EventCalender'
import FinanceChart from '@/components/FinanceChart'
import UserCart from '@/components/UserCart'

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row'>
      {/* LEFT  SIDE */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
        {/* USER CART */}
        <div className='flex gap-4 justify-between flex-wrap'>
          <UserCart type="student" />
          <UserCart type="teacher" />
          <UserCart type="parent" />
          <UserCart type="staff" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className='flex gap-4 flex-col lg:flex-row'>
          {/* COUNT CHART */}
          <div className='w-full lg:w-1/3 h-[450px]'>
            <CountChart />
          </div>
          {/* ATTENDANCE CHART */}
          <div className='w-full lg:w-2/3 h-[450px]'>
            <AttendanceChart />
          </div>
        </div>
        {/* BOTTOM CHARTS */}
        <div className='w-full h-[500px]'>
          <FinanceChart/>
        </div>
      </div>
      {/* RIGHT SIDE */}
      <div className='w-full lg:w-1/3 flex flex-col gap-8'>
        <EventCalender/>
      </div>
    </div>
  )
}

export default AdminPage
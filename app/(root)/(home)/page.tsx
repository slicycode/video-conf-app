import MeetingTypeList from '@/components/MeetingTypeList'

const Home = () => {
  const now = new Date()

  const time = now
    .toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })
    .split(' ')[0]

  const timeCycle = now
    .toLocaleTimeString('en-US', { hour12: true })
    .split(' ')[1]

  const date = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(
    now
  )

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-lg:px-5 max-lg:py-8 lg:p-11">
          <h2 className="bg-white/10 max-w-[273px] rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">
              {time}{' '}
              <span className="text-xl lg:text-2xl font-normal">
                {timeCycle}
              </span>
            </h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  )
}

export default Home

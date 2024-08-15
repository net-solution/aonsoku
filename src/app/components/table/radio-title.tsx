import clsx from 'clsx'
import { RadioIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { usePlayerMediaType, usePlayerSonglist } from '@/store/player.store'

interface TableRadioTitleProps {
  name: string
}

export function TableRadioTitle({ name }: TableRadioTitleProps) {
  const mediaType = usePlayerMediaType()
  const { radioList, currentSongIndex } = usePlayerSonglist()
  const [radioIsPlaying, setRadioIsPlaying] = useState(false)

  useEffect(() => {
    if (mediaType === 'song') return

    const isPlaying = radioList[currentSongIndex].name === name
    setRadioIsPlaying(isPlaying)
  }, [currentSongIndex, mediaType, name, radioList])

  return (
    <div className="flex gap-2 items-center min-w-[200px] 2xl:min-w-[350px]">
      <div className="flex justify-center items-center w-[40px] h-[40px] min-w-[40px] min-h-[40px] rounded shadow bg-foreground/20 dark:bg-accent">
        <RadioIcon className="w-5 h-5 text-foreground" strokeWidth={1.75} />
      </div>
      <div
        className={clsx(
          'flex flex-col justify-center items-center',
          radioIsPlaying && 'text-primary',
        )}
      >
        <p>{name}</p>
      </div>
    </div>
  )
}

import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"

type SliderProps = React.ComponentProps<typeof Slider>


interface TimeSliderProps extends SliderProps {
  time: number;
  setTime: (value: number) => void;
  max: number;
  step: number;
}

export function SliderComponent({ time, setTime, max, step, className, ...props }: TimeSliderProps) {
  return (
    <Slider
      defaultValue={[time]}
      onValueChange={(value) => setTime(value[0])}
      max={max}
      step={step}
      className={cn("w-[60%]", className)}
      {...props} 
    />
  )
}


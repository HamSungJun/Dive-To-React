export interface ClockProps {
    clockName: string;
}

export interface ClockState {
    currentTime: string;
    clockTimerId: ReturnType<typeof setTimeout> | null
}


export interface Commands {
    Transport: TransportCommands; 
}

export interface TransportCommands {
    Next: string;
    Pause: string;
    Play: string;
    PlayPause: string;
    Seek: string;
    Stop: string;
}

export const Commands: Commands = {
    Transport: {
        Next: 'Transport.Next',
        Pause: 'Transport.Pause',
        Play: 'Transport.Play',
        PlayPause: 'Transport.PlayPause',
        Seek: 'Transport.Seek',
        Stop: 'Transport.Stop'
    }
}
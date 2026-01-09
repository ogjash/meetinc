import { 
    DefaultVideoPlaceholder,
    StreamVideoParticipant,
    ToggleAudioPreviewButton,
    ToggleVideoPreviewButton,
    useCallStateHooks,
    VideoPreview
} from "@stream-io/video-react-sdk";
import { LogInIcon } from "lucide-react";

interface Props {
    onJoin: () => void;
}


//navigation
import { AppBar } from './navigation/AppBar'
import { AppDrawer } from './navigation/AppDrawer'
import { DrawerAccordion } from './navigation/DrawerAccordion'
import { BottomNavigator } from './navigation/BottomNavigator'

//display
import { BlurLayer } from './display/BlurLayer'
import { Divider } from './display/Divider'
import { Spacing } from './display/Spacing'

//flex
import { P } from './flex/P'
import { V } from './flex/V'

//tab
import { Button } from './tab/Button'
import { IconTab } from './tab/IconTab'
import { TouchableOpacity } from './tab/TouchableOpacity'
import { TxtTab } from './tab/TxtTab'

//input
import { Input } from './Input/Input'
import { Select } from './Input/Select'
import { Option } from './Input/Option'
import { ChatField } from './Input/ChatField'

//reader
import { AvatarUploader } from './reader/AvatarUploader'
import { ImageUploader } from './reader/ImageUploader'

//switch
import { Checkbox } from './switch/Checkbox'
import { Switch } from './switch/Switch'

//typography
import { Txt } from './typography/Txt'
import { TxtSpan } from './typography/TxtSpan'

//loading
import { LoadingSpinner } from './loading/LoadingSpinner'
import { LoadingLayer } from './loading/LoadingLayer'
import { Skeleton } from './loading/Skeleton'

//modal
import { Dialog } from './modal/Dialog'
import { Modal } from './modal/Modal'
import { BottomSheet } from './modal/BottomSheet'
import { CalenderModal } from './modal/CalenderModal'

//calneder
import { Calendar } from './calender/Calender'

//
import FlatList from 'react-flatlist-ui'
import { useJenga } from './JengaProvider'
import { Avatar, Image } from 'react-image-cached-resizer'

console.error = () => {}

export {
    AppBar,
    AppDrawer,
    DrawerAccordion,
    BottomNavigator,
    Spacing,
    Divider,
    BlurLayer,
    V,
    P,
    IconTab,
    Button,
    TxtTab,
    Txt,
    TxtSpan,
    Input,
    ChatField,
    Select,
    Option,
    AvatarUploader,
    ImageUploader,
    Checkbox,
    Switch,
    LoadingSpinner,
    LoadingLayer,
    Skeleton,
    Dialog,
    Modal,
    BottomSheet,
    CalenderModal,
    TouchableOpacity,
    useJenga,
    Calendar,
    FlatList,
    Avatar,
    Image,
}

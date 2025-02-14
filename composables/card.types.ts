import VK from '~/assets/platforms/vk.svg'
import TG from '~/assets/platforms/tg.svg'
import FieldRadioType from '~/components/fields/FieldRadioType.vue'

const platforms = {
    vk:VK,
    tg:TG,
}


export const GetPlatformIconComponent = (slug: keyof typeof platforms): any => {
    const current = platforms[slug]
    if (current !== undefined) return current;
    return platforms.vk
}


export type PlatformController = {
    platforms: PlatformCard[]
    currentPlatform?: PlatformCard,
    loading:boolean,
    loading_properties:boolean,
    properties:PlatformService[],
    currentProperty?: PlatformService
    fields: FieldEntity[],
    loadingFields: boolean,
    visiblePayModal:boolean,
}


export type PlatformService = {
    id: number
    platform_id: number
    name: string 
    slug: string
}

export type PlatformCard = {
    id:number
    name:string
    slug:string
}

export type FieldEntity = {
    id: number 
    service_id: number
    field_name: string
    field_slug: string
    field_type: "radio" | "text"
    default_value: string
    min_value: number
    max_value: number
    cost_type: string 
    options: FieldEntityOption[],
    currentValue: any,
}

export type FieldEntityOption = {
    key: string 
    value: number
}


const typeFields = {
    radio:FieldRadioType
}

export const findFieldComponent = (type:keyof typeof typeFields): any => {
    const component = typeFields[type]
    if (component === undefined) return undefined
    return typeFields[type]
}
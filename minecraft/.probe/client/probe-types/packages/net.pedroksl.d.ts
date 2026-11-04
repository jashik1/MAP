declare module "packages/net/pedroksl/advanced_ae/common/items/armors/$QuantumArmorBase" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ICreativeTabItem, $ICreativeTabItem$Type} from "packages/net/pedroksl/ae2addonlib/registry/helpers/$ICreativeTabItem"
import {$IUpgradeableItem, $IUpgradeableItem$Type} from "packages/net/pedroksl/advanced_ae/common/items/armors/$IUpgradeableItem"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$PoweredItem, $PoweredItem$Type} from "packages/net/pedroksl/advanced_ae/common/items/armors/$PoweredItem"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/pedroksl/advanced_ae/common/items/upgrades/$UpgradeType"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ItemMenuHost, $ItemMenuHost$Type} from "packages/appeng/api/implementations/menuobjects/$ItemMenuHost"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$ItemDisplayParameters"
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$SerializableDataTicket, $SerializableDataTicket$Type} from "packages/software/bernie/geckolib/network/$SerializableDataTicket"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$PacketDistributor$PacketTarget, $PacketDistributor$PacketTarget$Type} from "packages/net/minecraftforge/network/$PacketDistributor$PacketTarget"
import {$AnimatableInstanceCache, $AnimatableInstanceCache$Type} from "packages/software/bernie/geckolib/core/animatable/instance/$AnimatableInstanceCache"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IMenuItem, $IMenuItem$Type} from "packages/appeng/api/implementations/menuobjects/$IMenuItem"
import {$AnimatableManager$ControllerRegistrar, $AnimatableManager$ControllerRegistrar$Type} from "packages/software/bernie/geckolib/core/animation/$AnimatableManager$ControllerRegistrar"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$GlobalPos, $GlobalPos$Type} from "packages/net/minecraft/core/$GlobalPos"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DoubleSupplier, $DoubleSupplier$Type} from "packages/java/util/function/$DoubleSupplier"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $QuantumArmorBase extends $PoweredItem implements $GeoItem, $IMenuItem, $IUpgradeableItem, $ICreativeTabItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $ArmorMaterial$Type, arg1: $ArmorItem$Type$Type, arg2: $Item$Properties$Type, arg3: $DoubleSupplier$Type)

public "getTintColor"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
public "getMenuHost"(arg0: $Player$Type, arg1: integer, arg2: $ItemStack$Type, arg3: $BlockPos$Type): $ItemMenuHost
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "makesPiglinsNeutral"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "getAnimatableInstanceCache"(): $AnimatableInstanceCache
public "registerControllers"(arg0: $AnimatableManager$ControllerRegistrar$Type): void
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "setTintColor"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: integer): void
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public "openFromEquipmentSlot"(arg0: $Player$Type, arg1: integer, arg2: $ItemStack$Type): boolean
public "openFromEquipmentSlot"(arg0: $Player$Type, arg1: integer, arg2: $ItemStack$Type, arg3: boolean): boolean
public "getPossibleUpgrades"(): $List<($UpgradeType)>
public static "upgradeAvailableFor"(arg0: $UpgradeType$Type): $List<($QuantumArmorBase)>
public static "getId"(arg0: $ItemStack$Type): long
public "getTick"(arg0: any): double
public "animatableCacheOverride"(): $AnimatableInstanceCache
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public "isPerspectiveAware"(): boolean
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "getFilter"(arg0: $ItemStack$Type, arg1: $UpgradeType$Type): $List<($GenericStack)>
public "setFilter"(arg0: $ItemStack$Type, arg1: $UpgradeType$Type, arg2: $List$Type<($GenericStack$Type)>): void
public "hasUpgrade"(arg0: $ItemStack$Type, arg1: $UpgradeType$Type): boolean
public "getUpgradeValue"(arg0: $ItemStack$Type, arg1: $UpgradeType$Type, arg2: integer): integer
public "consumeEnergy"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: integer): void
public "consumeEnergy"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $UpgradeType$Type): void
public "applyUpgrade"(arg0: $ItemStack$Type, arg1: $UpgradeType$Type): boolean
public "getAppliedUpgrades"(arg0: $ItemStack$Type): $List<($UpgradeType)>
public "getPassiveUpgrades"(arg0: $ItemStack$Type): $List<($UpgradeType)>
public "isUpgradeEnabled"(arg0: $ItemStack$Type, arg1: $UpgradeType$Type): boolean
public "isUpgradePowered"(arg0: $ItemStack$Type, arg1: $UpgradeType$Type): boolean
public "isUpgradeAllowed"(arg0: $UpgradeType$Type): boolean
public "tickUpgrades"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): void
public "setUpgradeValue"(arg0: $ItemStack$Type, arg1: $UpgradeType$Type, arg2: integer): void
public "removeUpgrade"(arg0: $ItemStack$Type, arg1: $UpgradeType$Type): boolean
public "getUpgradeExtra"(arg0: $ItemStack$Type, arg1: $UpgradeType$Type, arg2: boolean): boolean
public "setUpgradeExtra"(arg0: $ItemStack$Type, arg1: $UpgradeType$Type, arg2: boolean): void
public "toggleUpgrade"(arg0: $ItemStack$Type, arg1: $UpgradeType$Type, arg2: $Player$Type): boolean
public "toggleUpgrade"(arg0: $ItemStack$Type, arg1: $UpgradeType$Type): boolean
public "isUpgradeEnabledAndPowered"(arg0: $ItemStack$Type, arg1: $UpgradeType$Type): boolean
public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$Type, arg1: $CreativeModeTab$Output$Type): void
public "triggerAnim"<D>(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public "triggerAnim"<D>(arg0: long, arg1: string, arg2: string, arg3: $PacketDistributor$PacketTarget$Type): void
public "getAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>): D
public "setAnimData"<D>(arg0: $Entity$Type, arg1: long, arg2: $SerializableDataTicket$Type<(D)>, arg3: D): void
public "stopTriggeredAnim"(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string, arg4: $PacketDistributor$PacketTarget$Type): void
public "stopTriggeredAnim"(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public "triggerArmorAnim"(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public "syncAnimData"<D>(arg0: long, arg1: $SerializableDataTicket$Type<(D)>, arg2: D, arg3: $PacketDistributor$PacketTarget$Type): void
public "stopTriggeredArmorAnim"(arg0: $Entity$Type, arg1: long, arg2: string, arg3: string): void
public "getLinkedPosition"(arg0: $ItemStack$Type): $GlobalPos
public "getLinkedGrid"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): $IGrid
public "getLinkedGrid"(arg0: $ItemStack$Type, arg1: $Level$Type): $IGrid
public "updateStatus"(): void
public "getBoneResetTime"(): double
public "shouldPlayAnimsWhileGamePaused"(): boolean
public static "get"(arg0: $ItemStack$Type): $Equipable
get "animatableInstanceCache"(): $AnimatableInstanceCache
get "possibleUpgrades"(): $List<($UpgradeType)>
get "perspectiveAware"(): boolean
get "boneResetTime"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumArmorBase$Type = ($QuantumArmorBase);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumArmorBase_ = $QuantumArmorBase$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/entities/$AdvCraftingBlockEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$AAEAbstractCraftingUnitBlock, $AAEAbstractCraftingUnitBlock$Type} from "packages/net/pedroksl/advanced_ae/common/blocks/$AAEAbstractCraftingUnitBlock"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$ModelData, $ModelData$Type} from "packages/net/minecraftforge/client/model/data/$ModelData"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$AENetworkBlockEntity, $AENetworkBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkBlockEntity"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$AdvCraftingCPUCluster, $AdvCraftingCPUCluster$Type} from "packages/net/pedroksl/advanced_ae/common/cluster/$AdvCraftingCPUCluster"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IPowerChannelState, $IPowerChannelState$Type} from "packages/appeng/api/implementations/$IPowerChannelState"
import {$IAEMultiBlock, $IAEMultiBlock$Type} from "packages/appeng/me/cluster/$IAEMultiBlock"
import {$IConfigurableObject, $IConfigurableObject$Type} from "packages/appeng/api/util/$IConfigurableObject"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"

export class $AdvCraftingBlockEntity extends $AENetworkBlockEntity implements $IAEMultiBlock<($AdvCraftingCPUCluster)>, $IPowerChannelState, $IConfigurableObject {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "setName"(arg0: string): void
public "isActive"(): boolean
public "isValid"(): boolean
public "disconnect"(arg0: boolean): void
public "getStorageBytes"(): long
public "getStorageMultiplier"(): integer
public "getAccelerationMultiplier"(): integer
public "getConfigManager"(): $IConfigManager
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "isMultiblocked"(): boolean
public "getModelData"(): $ModelData
public "m_183515_"(arg0: $CompoundTag$Type): void
public "setBlockState"(arg0: $BlockState$Type): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "onReady"(): void
public "isFormed"(): boolean
public "breakCluster"(): void
public "isCoreBlock"(): boolean
public "getUnitBlock"(): $AAEAbstractCraftingUnitBlock<(any)>
public "updateMultiBlock"(arg0: $BlockPos$Type): void
public "updateSubType"(arg0: boolean): void
public "setPreviousState"(arg0: $CompoundTag$Type): void
public "setCoreBlock"(arg0: boolean): void
public "getPreviousState"(): $CompoundTag
public "getAcceleratorThreads"(): integer
public "updateStatus"(arg0: $AdvCraftingCPUCluster$Type): void
public "isPowered"(): boolean
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
set "name"(value: string)
get "active"(): boolean
get "valid"(): boolean
get "storageBytes"(): long
get "storageMultiplier"(): integer
get "accelerationMultiplier"(): integer
get "configManager"(): $IConfigManager
get "multiblocked"(): boolean
get "modelData"(): $ModelData
set "blockState"(value: $BlockState$Type)
get "formed"(): boolean
get "coreBlock"(): boolean
get "unitBlock"(): $AAEAbstractCraftingUnitBlock<(any)>
set "previousState"(value: $CompoundTag$Type)
set "coreBlock"(value: boolean)
get "previousState"(): $CompoundTag
get "acceleratorThreads"(): integer
get "powered"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvCraftingBlockEntity$Type = ($AdvCraftingBlockEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvCraftingBlockEntity_ = $AdvCraftingBlockEntity$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/items/$AdvPatternEncoderItem" {
import {$ItemMenuHost, $ItemMenuHost$Type} from "packages/appeng/api/implementations/menuobjects/$ItemMenuHost"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$AEBaseItem, $AEBaseItem$Type} from "packages/appeng/items/$AEBaseItem"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$IMenuItem, $IMenuItem$Type} from "packages/appeng/api/implementations/menuobjects/$IMenuItem"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AdvPatternEncoderItem extends $AEBaseItem implements $IMenuItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "openFromInventory"(arg0: $Player$Type, arg1: integer): boolean
public "getMenuHost"(arg0: $Player$Type, arg1: integer, arg2: $ItemStack$Type, arg3: $BlockPos$Type): $ItemMenuHost
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvPatternEncoderItem$Type = ($AdvPatternEncoderItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvPatternEncoderItem_ = $AdvPatternEncoderItem$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/items/$AAECraftingBlockItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$AEBaseBlockItem, $AEBaseBlockItem$Type} from "packages/appeng/block/$AEBaseBlockItem"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AAECraftingBlockItem extends $AEBaseBlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "addCheckedInformation"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AAECraftingBlockItem$Type = ($AAECraftingBlockItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AAECraftingBlockItem_ = $AAECraftingBlockItem$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/items/armors/$QuantumChestplate" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$QuantumArmorBase, $QuantumArmorBase$Type} from "packages/net/pedroksl/advanced_ae/common/items/armors/$QuantumArmorBase"
import {$ISubMenu, $ISubMenu$Type} from "packages/appeng/menu/$ISubMenu"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ItemMenuHost, $ItemMenuHost$Type} from "packages/appeng/api/implementations/menuobjects/$ItemMenuHost"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$ItemDisplayParameters"
import {$GeoItem, $GeoItem$Type} from "packages/software/bernie/geckolib/animatable/$GeoItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ISubMenuHost, $ISubMenuHost$Type} from "packages/appeng/api/storage/$ISubMenuHost"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $QuantumChestplate extends $QuantumArmorBase implements $GeoItem, $ISubMenuHost {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "returnToMainMenu"(arg0: $Player$Type, arg1: $ISubMenu$Type): void
public "getMainMenuIcon"(): $ItemStack
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "getMenuHost"(arg0: $Player$Type, arg1: integer, arg2: $ItemStack$Type, arg3: $BlockPos$Type): $ItemMenuHost
public "tickCreativeFlight"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): void
public "keyIsCraftable"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $AEKey$Type): boolean
public "openFromEquipmentSlot"(arg0: $Player$Type, arg1: integer, arg2: $ItemStack$Type, arg3: boolean): boolean
public "attemptCraftingTarget"(arg0: $Player$Type, arg1: integer, arg2: $ItemStack$Type): boolean
public static "getId"(arg0: $ItemStack$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$Type, arg1: $CreativeModeTab$Output$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
get "mainMenuIcon"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumChestplate$Type = ($QuantumChestplate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumChestplate_ = $QuantumChestplate$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/fluids/$QuantumInfusionFluid$Flowing" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$QuantumInfusionFluid, $QuantumInfusionFluid$Type} from "packages/net/pedroksl/advanced_ae/common/fluids/$QuantumInfusionFluid"
import {$ForgeFlowingFluid$Properties, $ForgeFlowingFluid$Properties$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $QuantumInfusionFluid$Flowing extends $QuantumInfusionFluid {
static readonly "PROPERTIES": $ForgeFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

public "isSource"(arg0: $FluidState$Type): boolean
public "getAmount"(arg0: $FluidState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumInfusionFluid$Flowing$Type = ($QuantumInfusionFluid$Flowing);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumInfusionFluid$Flowing_ = $QuantumInfusionFluid$Flowing$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/items/upgrades/$UpgradeType$ExtraSettings" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $UpgradeType$ExtraSettings extends $Enum<($UpgradeType$ExtraSettings)> {
static readonly "NONE": $UpgradeType$ExtraSettings
static readonly "BLACKLIST": $UpgradeType$ExtraSettings


public static "values"(): ($UpgradeType$ExtraSettings)[]
public static "valueOf"(arg0: string): $UpgradeType$ExtraSettings
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeType$ExtraSettings$Type = (("blacklist") | ("none")) | ($UpgradeType$ExtraSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeType$ExtraSettings_ = $UpgradeType$ExtraSettings$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/cluster/$AdvCraftingCPU" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ICraftingCPU, $ICraftingCPU$Type} from "packages/appeng/api/networking/crafting/$ICraftingCPU"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IActionSource, $IActionSource$Type} from "packages/appeng/api/networking/security/$IActionSource"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"
import {$CpuSelectionMode, $CpuSelectionMode$Type} from "packages/appeng/api/config/$CpuSelectionMode"
import {$AdvCraftingCPULogic, $AdvCraftingCPULogic$Type} from "packages/net/pedroksl/advanced_ae/common/logic/$AdvCraftingCPULogic"
import {$AdvCraftingCPUCluster, $AdvCraftingCPUCluster$Type} from "packages/net/pedroksl/advanced_ae/common/cluster/$AdvCraftingCPUCluster"
import {$CraftingJobStatus, $CraftingJobStatus$Type} from "packages/appeng/api/networking/crafting/$CraftingJobStatus"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$ListCraftingInventory, $ListCraftingInventory$Type} from "packages/appeng/crafting/inv/$ListCraftingInventory"

export class $AdvCraftingCPU implements $ICraftingCPU {
readonly "craftingLogic": $AdvCraftingCPULogic
 "finalOutput": $GenericStack

constructor(arg0: $AdvCraftingCPUCluster$Type, arg1: $UUID$Type, arg2: long)

public "getName"(): $Component
public "isActive"(): boolean
public "getInventory"(): $ListCraftingInventory
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "deactivate"(): void
public "getAvailableStorage"(): long
public "getLevel"(): $Level
public "getSrc"(): $IActionSource
public "isBusy"(): boolean
public "getCoProcessors"(): integer
public "getJobStatus"(): $CraftingJobStatus
public "getSelectionMode"(): $CpuSelectionMode
public "cancelJob"(): void
public "getGrid"(): $IGrid
public "markDirty"(): void
public "updateOutput"(arg0: $GenericStack$Type): void
get "name"(): $Component
get "active"(): boolean
get "inventory"(): $ListCraftingInventory
get "availableStorage"(): long
get "level"(): $Level
get "src"(): $IActionSource
get "busy"(): boolean
get "coProcessors"(): integer
get "jobStatus"(): $CraftingJobStatus
get "selectionMode"(): $CpuSelectionMode
get "grid"(): $IGrid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvCraftingCPU$Type = ($AdvCraftingCPU);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvCraftingCPU_ = $AdvCraftingCPU$Type;
}}
declare module "packages/net/pedroksl/ae2addonlib/util/$WaterBasedFluidType" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$FogShape, $FogShape$Type} from "packages/com/mojang/blaze3d/shaders/$FogShape"
import {$Vector3f, $Vector3f$Type} from "packages/org/joml/$Vector3f"
import {$FluidType$Properties, $FluidType$Properties$Type} from "packages/net/minecraftforge/fluids/$FluidType$Properties"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Camera, $Camera$Type} from "packages/net/minecraft/client/$Camera"
import {$IClientFluidTypeExtensions, $IClientFluidTypeExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientFluidTypeExtensions"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$ClientLevel, $ClientLevel$Type} from "packages/net/minecraft/client/multiplayer/$ClientLevel"
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FogRenderer$FogMode, $FogRenderer$FogMode$Type} from "packages/net/minecraft/client/renderer/$FogRenderer$FogMode"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$BlockAndTintGetter, $BlockAndTintGetter$Type} from "packages/net/minecraft/world/level/$BlockAndTintGetter"

export class $WaterBasedFluidType extends $FluidType implements $IClientFluidTypeExtensions {
static readonly "BUCKET_VOLUME": integer
static readonly "SIZE": $Lazy<(integer)>

constructor(arg0: $FluidType$Properties$Type)

public "initializeClient"(arg0: $Consumer$Type<($IClientFluidTypeExtensions$Type)>): void
public static "of"(arg0: $FluidState$Type): $IClientFluidTypeExtensions
public static "of"(arg0: $FluidType$Type): $IClientFluidTypeExtensions
public static "of"(arg0: $Fluid$Type): $IClientFluidTypeExtensions
public "getTintColor"(): integer
public "getTintColor"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): integer
public "getTintColor"(arg0: $FluidStack$Type): integer
public "getStillTexture"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): $ResourceLocation
public "getStillTexture"(arg0: $FluidStack$Type): $ResourceLocation
public "getStillTexture"(): $ResourceLocation
public "getRenderOverlayTexture"(arg0: $Minecraft$Type): $ResourceLocation
public "modifyFogColor"(arg0: $Camera$Type, arg1: float, arg2: $ClientLevel$Type, arg3: integer, arg4: float, arg5: $Vector3f$Type): $Vector3f
public "modifyFogRender"(arg0: $Camera$Type, arg1: $FogRenderer$FogMode$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $FogShape$Type): void
public "getOverlayTexture"(arg0: $FluidStack$Type): $ResourceLocation
public "getOverlayTexture"(): $ResourceLocation
public "getOverlayTexture"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): $ResourceLocation
public "getFlowingTexture"(arg0: $FluidStack$Type): $ResourceLocation
public "getFlowingTexture"(arg0: $FluidState$Type, arg1: $BlockAndTintGetter$Type, arg2: $BlockPos$Type): $ResourceLocation
public "getFlowingTexture"(): $ResourceLocation
public "renderOverlay"(arg0: $Minecraft$Type, arg1: $PoseStack$Type): void
get "tintColor"(): integer
get "stillTexture"(): $ResourceLocation
get "overlayTexture"(): $ResourceLocation
get "flowingTexture"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaterBasedFluidType$Type = ($WaterBasedFluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $WaterBasedFluidType_ = $WaterBasedFluidType$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/blocks/$AAECraftingUnitBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$ICraftingUnitType, $ICraftingUnitType$Type} from "packages/appeng/block/crafting/$ICraftingUnitType"
import {$AAEAbstractCraftingUnitBlock, $AAEAbstractCraftingUnitBlock$Type} from "packages/net/pedroksl/advanced_ae/common/blocks/$AAEAbstractCraftingUnitBlock"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$AdvCraftingBlockEntity, $AdvCraftingBlockEntity$Type} from "packages/net/pedroksl/advanced_ae/common/entities/$AdvCraftingBlockEntity"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $AAECraftingUnitBlock extends $AAEAbstractCraftingUnitBlock<($AdvCraftingBlockEntity)> {
static readonly "FORMED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "MULTIBLOCKED": $BooleanProperty
static readonly "LIGHT_LEVEL": $IntegerProperty
readonly "type": $ICraftingUnitType
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $ICraftingUnitType$Type)

public static "getProps"(arg0: $ICraftingUnitType$Type, arg1: boolean): $BlockBehaviour$Properties
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AAECraftingUnitBlock$Type = ($AAECraftingUnitBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AAECraftingUnitBlock_ = $AAECraftingUnitBlock$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/logic/$AdvCraftingCPULogic" {
import {$CraftingService, $CraftingService$Type} from "packages/appeng/me/service/$CraftingService"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ICraftingPlan, $ICraftingPlan$Type} from "packages/appeng/api/networking/crafting/$ICraftingPlan"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IActionSource, $IActionSource$Type} from "packages/appeng/api/networking/security/$IActionSource"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"
import {$ICraftingRequester, $ICraftingRequester$Type} from "packages/appeng/api/networking/crafting/$ICraftingRequester"
import {$IEnergyService, $IEnergyService$Type} from "packages/appeng/api/networking/energy/$IEnergyService"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$ICraftingLink, $ICraftingLink$Type} from "packages/appeng/api/networking/crafting/$ICraftingLink"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$ICraftingSubmitResult, $ICraftingSubmitResult$Type} from "packages/appeng/api/networking/crafting/$ICraftingSubmitResult"
import {$AdvCraftingCPU, $AdvCraftingCPU$Type} from "packages/net/pedroksl/advanced_ae/common/cluster/$AdvCraftingCPU"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"
import {$ListCraftingInventory, $ListCraftingInventory$Type} from "packages/appeng/crafting/inv/$ListCraftingInventory"
import {$KeyCounter, $KeyCounter$Type} from "packages/appeng/api/stacks/$KeyCounter"
import {$ElapsedTimeTracker, $ElapsedTimeTracker$Type} from "packages/net/pedroksl/advanced_ae/common/logic/$ElapsedTimeTracker"

export class $AdvCraftingCPULogic {

constructor(arg0: $AdvCraftingCPU$Type)

public "isMarkedForDeletion"(): boolean
public "trySubmitJob"(arg0: $IGrid$Type, arg1: $ICraftingPlan$Type, arg2: $IActionSource$Type, arg3: $ICraftingRequester$Type): $ICraftingSubmitResult
public "getFinalJobOutput"(): $GenericStack
public "storeItems"(): void
public "executeCrafting"(arg0: integer, arg1: $CraftingService$Type, arg2: $IEnergyService$Type, arg3: $Level$Type): integer
public "markForDeletion"(): void
public "insert"(arg0: $AEKey$Type, arg1: long, arg2: $Actionable$Type): long
public "getInventory"(): $ListCraftingInventory
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "cancel"(): void
public "getStored"(arg0: $AEKey$Type): long
public "getAllItems"(arg0: $KeyCounter$Type): void
public "hasJob"(): boolean
public "getLastModifiedOnTick"(): long
public "addListener"(arg0: $Consumer$Type<($AEKey$Type)>): void
public "removeListener"(arg0: $Consumer$Type<($AEKey$Type)>): void
public "isCantStoreItems"(): boolean
public "getPendingOutputs"(arg0: $AEKey$Type): long
public "getElapsedTimeTracker"(): $ElapsedTimeTracker
public "tickCraftingLogic"(arg0: $IEnergyService$Type, arg1: $CraftingService$Type): void
public "getAllWaitingFor"(arg0: $Set$Type<($AEKey$Type)>): void
public "getLastLink"(): $ICraftingLink
public "getWaitingFor"(arg0: $AEKey$Type): long
get "markedForDeletion"(): boolean
get "finalJobOutput"(): $GenericStack
get "inventory"(): $ListCraftingInventory
get "lastModifiedOnTick"(): long
get "cantStoreItems"(): boolean
get "elapsedTimeTracker"(): $ElapsedTimeTracker
get "lastLink"(): $ICraftingLink
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvCraftingCPULogic$Type = ($AdvCraftingCPULogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvCraftingCPULogic_ = $AdvCraftingCPULogic$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/blocks/$QuantumCrafterBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$AEBaseEntityBlock, $AEBaseEntityBlock$Type} from "packages/appeng/block/$AEBaseEntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$QuantumCrafterEntity, $QuantumCrafterEntity$Type} from "packages/net/pedroksl/advanced_ae/common/entities/$QuantumCrafterEntity"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IOrientationStrategy, $IOrientationStrategy$Type} from "packages/appeng/api/orientation/$IOrientationStrategy"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $QuantumCrafterBlock extends $AEBaseEntityBlock<($QuantumCrafterEntity)> {
static readonly "WORKING": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "getOrientationStrategy"(): $IOrientationStrategy
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
get "orientationStrategy"(): $IOrientationStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumCrafterBlock$Type = ($QuantumCrafterBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumCrafterBlock_ = $QuantumCrafterBlock$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/blocks/$AdvPatternProviderBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$AEBaseEntityBlock, $AEBaseEntityBlock$Type} from "packages/appeng/block/$AEBaseEntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AdvPatternProviderEntity, $AdvPatternProviderEntity$Type} from "packages/net/pedroksl/advanced_ae/common/entities/$AdvPatternProviderEntity"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AdvPatternProviderBlock extends $AEBaseEntityBlock<($AdvPatternProviderEntity)> {
static readonly "CONNECTION_STATE": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "setSide"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): void
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "onActivated"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $InteractionHand$Type, arg4: $ItemStack$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvPatternProviderBlock$Type = ($AdvPatternProviderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvPatternProviderBlock_ = $AdvPatternProviderBlock$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/entities/$QuantumCrafterEntity" {
import {$TickingRequest, $TickingRequest$Type} from "packages/appeng/api/networking/ticking/$TickingRequest"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ListTag, $ListTag$Type} from "packages/net/minecraft/nbt/$ListTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$SettingsFrom, $SettingsFrom$Type} from "packages/appeng/util/$SettingsFrom"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TickRateModulation, $TickRateModulation$Type} from "packages/appeng/api/networking/ticking/$TickRateModulation"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$LinkedHashMap, $LinkedHashMap$Type} from "packages/java/util/$LinkedHashMap"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MenuLocator, $MenuLocator$Type} from "packages/appeng/menu/locator/$MenuLocator"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$RelativeSide, $RelativeSide$Type} from "packages/appeng/api/orientation/$RelativeSide"
import {$ISubMenu, $ISubMenu$Type} from "packages/appeng/menu/$ISubMenu"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$AENetworkPowerBlockEntity, $AENetworkPowerBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkPowerBlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IGridTickable, $IGridTickable$Type} from "packages/appeng/api/networking/ticking/$IGridTickable"
import {$IConfigurableObject, $IConfigurableObject$Type} from "packages/appeng/api/util/$IConfigurableObject"
import {$AutoCraftingContainer, $AutoCraftingContainer$Type} from "packages/net/pedroksl/advanced_ae/common/helpers/$AutoCraftingContainer"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$IUpgradeableObject, $IUpgradeableObject$Type} from "packages/appeng/api/upgrades/$IUpgradeableObject"
import {$IDirectionalOutputHost, $IDirectionalOutputHost$Type} from "packages/net/pedroksl/ae2addonlib/api/$IDirectionalOutputHost"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"

export class $QuantumCrafterEntity extends $AENetworkPowerBlockEntity implements $IGridTickable, $IUpgradeableObject, $IConfigurableObject, $IDirectionalOutputHost, $AutoCraftingContainer {
static readonly "NBT_SEND_LIST": string
static readonly "NBT_MEMORY_CARD_PATTERNS": string
static readonly "NBT_ALLOWED_SIDES": string

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "isActive"(): boolean
public "importSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type, arg2: $Player$Type): void
public "exportSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type, arg2: $Player$Type): void
public "getSubInventory"(arg0: $ResourceLocation$Type): $InternalInventory
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "updateOutputSides"(arg0: $EnumSet$Type<($RelativeSide$Type)>): void
public "getOutputInv"(): $InternalInventory
public "setInvalidPattern"(arg0: integer, arg1: boolean): void
public "setStockAmount"(arg0: integer, arg1: integer, arg2: long): void
public "setMaxCrafted"(arg0: integer, arg1: long): void
public "makeJobsTag"(): $ListTag
public "returnToMainMenu"(arg0: $Player$Type, arg1: $ISubMenu$Type): void
public "getMainMenuIcon"(): $ItemStack
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "getUpgrades"(): $IUpgradeInventory
public "getConfigManager"(): $IConfigManager
public "getPatternInventory"(): $InternalInventory
public "toggleEnablePattern"(arg0: integer): void
public "getInvalidPatternSlots"(): $List<(boolean)>
public "getPatternConfigInputs"(arg0: integer): $LinkedHashMap<($AEKey), (long)>
public "getPatternConfigOutput"(arg0: integer): $Pair<($AEKey), (long)>
public "getEnabledPatternSlots"(): $List<(boolean)>
public "setWorking"(arg0: boolean): void
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "updateRedstoneState"(): void
public "getLocator"(): $MenuLocator
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "getBlockPosition"(): $BlockPos
public "getAllowedOutputs"(): $EnumSet<($RelativeSide)>
public "isVisibleInTerminal"(): boolean
public "getTerminalPatternInventory"(): $InternalInventory
public "getTerminalSortOrder"(): long
public "m_183515_"(arg0: $CompoundTag$Type): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "isWorking"(): boolean
public "getInternalInventory"(): $InternalInventory
public "tickingRequest"(arg0: $IGridNode$Type, arg1: integer): $TickRateModulation
public "getTickingRequest"(arg0: $IGridNode$Type): $TickingRequest
public "getGrid"(): $IGrid
public "isUpgradedWith"(arg0: $ItemLike$Type): boolean
public "getInstalledUpgrades"(arg0: $ItemLike$Type): integer
public "getOrientation"(): $BlockOrientation
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "active"(): boolean
get "outputInv"(): $InternalInventory
get "mainMenuIcon"(): $ItemStack
get "upgrades"(): $IUpgradeInventory
get "configManager"(): $IConfigManager
get "patternInventory"(): $InternalInventory
get "invalidPatternSlots"(): $List<(boolean)>
get "enabledPatternSlots"(): $List<(boolean)>
set "working"(value: boolean)
get "locator"(): $MenuLocator
get "blockPosition"(): $BlockPos
get "allowedOutputs"(): $EnumSet<($RelativeSide)>
get "visibleInTerminal"(): boolean
get "terminalPatternInventory"(): $InternalInventory
get "terminalSortOrder"(): long
get "working"(): boolean
get "internalInventory"(): $InternalInventory
get "grid"(): $IGrid
get "orientation"(): $BlockOrientation
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumCrafterEntity$Type = ($QuantumCrafterEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumCrafterEntity_ = $QuantumCrafterEntity$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/cluster/$AdvCraftingCPUCluster" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$ICraftingPlan, $ICraftingPlan$Type} from "packages/appeng/api/networking/crafting/$ICraftingPlan"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$AdvCraftingBlockEntity, $AdvCraftingBlockEntity$Type} from "packages/net/pedroksl/advanced_ae/common/entities/$AdvCraftingBlockEntity"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IActionSource, $IActionSource$Type} from "packages/appeng/api/networking/security/$IActionSource"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"
import {$ICraftingRequester, $ICraftingRequester$Type} from "packages/appeng/api/networking/crafting/$ICraftingRequester"
import {$CpuSelectionMode, $CpuSelectionMode$Type} from "packages/appeng/api/config/$CpuSelectionMode"
import {$ICraftingSubmitResult, $ICraftingSubmitResult$Type} from "packages/appeng/api/networking/crafting/$ICraftingSubmitResult"
import {$CraftingJobStatus, $CraftingJobStatus$Type} from "packages/appeng/api/networking/crafting/$CraftingJobStatus"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IAECluster, $IAECluster$Type} from "packages/appeng/me/cluster/$IAECluster"
import {$AdvCraftingCPU, $AdvCraftingCPU$Type} from "packages/net/pedroksl/advanced_ae/common/cluster/$AdvCraftingCPU"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Iterator, $Iterator$Type} from "packages/java/util/$Iterator"
import {$ListCraftingInventory, $ListCraftingInventory$Type} from "packages/appeng/crafting/inv/$ListCraftingInventory"

export class $AdvCraftingCPUCluster implements $IAECluster {

constructor(arg0: $BlockPos$Type, arg1: $BlockPos$Type)

public "recalculateRemainingStorage"(): void
public "getNode"(): $IGridNode
public "getName"(): $Component
public "destroy"(): void
public "isDestroyed"(): boolean
public "isActive"(): boolean
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "getConfigManager"(): $IConfigManager
public "getAvailableStorage"(): long
public "canBeAutoSelectedFor"(arg0: $IActionSource$Type): boolean
public "getRemainingCapacityCPU"(): $AdvCraftingCPU
public "numBlockEntities"(): integer
public "cancelJobs"(): void
public "getInventories"(): $List<($ListCraftingInventory)>
public "getLevel"(): $Level
public "breakCluster"(): void
public "updateName"(): void
public "getBlockEntities"(): $Iterator<($AdvCraftingBlockEntity)>
public "getSrc"(): $IActionSource
public "getBoundsMax"(): $BlockPos
public "getBoundsMin"(): $BlockPos
public "updateStatus"(arg0: boolean): void
public "submitJob"(arg0: $IGrid$Type, arg1: $ICraftingPlan$Type, arg2: $IActionSource$Type, arg3: $ICraftingRequester$Type): $ICraftingSubmitResult
public "getActiveCPUs"(): $List<($AdvCraftingCPU)>
public "isPreferredFor"(arg0: $IActionSource$Type): boolean
public "getCoProcessors"(): integer
public "getJobStatus"(arg0: $UUID$Type): $CraftingJobStatus
public "getSelectionMode"(): $CpuSelectionMode
public "cancelJob"(arg0: $UUID$Type): void
public "getGrid"(): $IGrid
public "markDirty"(): void
public "updateOutput"(arg0: $GenericStack$Type): void
get "node"(): $IGridNode
get "name"(): $Component
get "destroyed"(): boolean
get "active"(): boolean
get "configManager"(): $IConfigManager
get "availableStorage"(): long
get "remainingCapacityCPU"(): $AdvCraftingCPU
get "inventories"(): $List<($ListCraftingInventory)>
get "level"(): $Level
get "blockEntities"(): $Iterator<($AdvCraftingBlockEntity)>
get "src"(): $IActionSource
get "boundsMax"(): $BlockPos
get "boundsMin"(): $BlockPos
get "activeCPUs"(): $List<($AdvCraftingCPU)>
get "coProcessors"(): integer
get "selectionMode"(): $CpuSelectionMode
get "grid"(): $IGrid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvCraftingCPUCluster$Type = ($AdvCraftingCPUCluster);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvCraftingCPUCluster_ = $AdvCraftingCPUCluster$Type;
}}
declare module "packages/net/pedroksl/ae2addonlib/registry/helpers/$ICreativeTabItem" {
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$ItemDisplayParameters"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"

export interface $ICreativeTabItem {

 "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$Type, arg1: $CreativeModeTab$Output$Type): void

(arg0: $CreativeModeTab$ItemDisplayParameters$Type, arg1: $CreativeModeTab$Output$Type): void
}

export namespace $ICreativeTabItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICreativeTabItem$Type = ($ICreativeTabItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICreativeTabItem_ = $ICreativeTabItem$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/logic/$AdvPatternProviderLogicHost" {
import {$IPriorityHost, $IPriorityHost$Type} from "packages/appeng/helpers/$IPriorityHost"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$AEItemKey, $AEItemKey$Type} from "packages/appeng/api/stacks/$AEItemKey"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$AdvPatternProviderLogic, $AdvPatternProviderLogic$Type} from "packages/net/pedroksl/advanced_ae/common/logic/$AdvPatternProviderLogic"
import {$PatternContainer, $PatternContainer$Type} from "packages/appeng/helpers/patternprovider/$PatternContainer"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$PatternContainerGroup, $PatternContainerGroup$Type} from "packages/appeng/api/implementations/blockentities/$PatternContainerGroup"
import {$MenuLocator, $MenuLocator$Type} from "packages/appeng/menu/locator/$MenuLocator"
import {$IConfigurableObject, $IConfigurableObject$Type} from "packages/appeng/api/util/$IConfigurableObject"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$ISubMenu, $ISubMenu$Type} from "packages/appeng/menu/$ISubMenu"

export interface $AdvPatternProviderLogicHost extends $IConfigurableObject, $IPriorityHost, $PatternContainer {

 "setPriority"(arg0: integer): void
 "getPriority"(): integer
 "getBlockEntity"(): $BlockEntity
 "getTargets"(): $EnumSet<($Direction)>
 "returnToMainMenu"(arg0: $Player$Type, arg1: $ISubMenu$Type): void
 "saveChanges"(): void
 "getConfigManager"(): $IConfigManager
 "isVisibleInTerminal"(): boolean
 "getTerminalPatternInventory"(): $InternalInventory
 "getTerminalSortOrder"(): long
 "openMenu"(arg0: $Player$Type, arg1: $MenuLocator$Type): void
 "getLogic"(): $AdvPatternProviderLogic
 "getTerminalIcon"(): $AEItemKey
 "getTerminalGroup"(): $PatternContainerGroup
 "getGrid"(): $IGrid
 "getMainMenuIcon"(): $ItemStack
}

export namespace $AdvPatternProviderLogicHost {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvPatternProviderLogicHost$Type = ($AdvPatternProviderLogicHost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvPatternProviderLogicHost_ = $AdvPatternProviderLogicHost$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/entities/$SmallAdvPatternProviderEntity" {
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$AdvPatternProviderEntity, $AdvPatternProviderEntity$Type} from "packages/net/pedroksl/advanced_ae/common/entities/$AdvPatternProviderEntity"
import {$AEItemKey, $AEItemKey$Type} from "packages/appeng/api/stacks/$AEItemKey"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SmallAdvPatternProviderEntity extends $AdvPatternProviderEntity {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getMainMenuIcon"(): $ItemStack
public "getTerminalIcon"(): $AEItemKey
public "getBlockEntity"(): $BlockEntity
public "saveChanges"(): void
public static "tryClear"(arg0: any): void
get "mainMenuIcon"(): $ItemStack
get "terminalIcon"(): $AEItemKey
get "blockEntity"(): $BlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmallAdvPatternProviderEntity$Type = ($SmallAdvPatternProviderEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmallAdvPatternProviderEntity_ = $SmallAdvPatternProviderEntity$Type;
}}
declare module "packages/net/pedroksl/ae2addonlib/recipes/$IngredientStack" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IngredientStack$Item, $IngredientStack$Item$Type} from "packages/net/pedroksl/ae2addonlib/recipes/$IngredientStack$Item"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IngredientStack$Fluid, $IngredientStack$Fluid$Type} from "packages/net/pedroksl/ae2addonlib/recipes/$IngredientStack$Fluid"

export class $IngredientStack<T, P> {


public "getStackAmount"(arg0: P): integer
public "setStackAmount"(arg0: P, arg1: integer): void
public "test"(arg0: P): boolean
public "isEmpty"(): boolean
public static "of"(arg0: $Ingredient$Type, arg1: integer): $IngredientStack$Item
public static "of"(arg0: $ItemStack$Type): $IngredientStack$Item
public static "of"(arg0: $FluidStack$Type): $IngredientStack$Fluid
public "consume"(arg0: P): void
public "toJson"(): $JsonElement
public "checkType"(arg0: any): boolean
public "sample"(): $IngredientStack<(T), (P)>
public "getAmount"(): integer
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
public "getIngredient"(): T
get "empty"(): boolean
get "amount"(): integer
get "ingredient"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientStack$Type<T, P> = ($IngredientStack<(T), (P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientStack_<T, P> = $IngredientStack$Type<(T), (P)>;
}}
declare module "packages/net/pedroksl/advanced_ae/common/items/$BlockUpgradeItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $BlockUpgradeItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockUpgradeItem$Type = ($BlockUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockUpgradeItem_ = $BlockUpgradeItem$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/fluids/$QuantumInfusionFluid" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$ForgeFlowingFluid$Properties, $ForgeFlowingFluid$Properties$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties"
import {$ForgeFlowingFluid, $ForgeFlowingFluid$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $QuantumInfusionFluid extends $ForgeFlowingFluid {
static readonly "PROPERTIES": $ForgeFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>


public "getBucket"(): $Item
public "getSource"(): $Fluid
public "getFlowing"(): $Fluid
get "bucket"(): $Item
get "source"(): $Fluid
get "flowing"(): $Fluid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumInfusionFluid$Type = ($QuantumInfusionFluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumInfusionFluid_ = $QuantumInfusionFluid$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/logic/$AdvPatternProviderLogic" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$HashSet, $HashSet$Type} from "packages/java/util/$HashSet"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$LockCraftingMode, $LockCraftingMode$Type} from "packages/appeng/api/config/$LockCraftingMode"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$ICraftingProvider, $ICraftingProvider$Type} from "packages/appeng/api/networking/crafting/$ICraftingProvider"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$InternalInventoryHost, $InternalInventoryHost$Type} from "packages/appeng/util/inv/$InternalInventoryHost"
import {$IManagedGridNode, $IManagedGridNode$Type} from "packages/appeng/api/networking/$IManagedGridNode"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$PatternContainerGroup, $PatternContainerGroup$Type} from "packages/appeng/api/implementations/blockentities/$PatternContainerGroup"
import {$IPatternDetails, $IPatternDetails$Type} from "packages/appeng/api/crafting/$IPatternDetails"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AdvPatternProviderLogicHost, $AdvPatternProviderLogicHost$Type} from "packages/net/pedroksl/advanced_ae/common/logic/$AdvPatternProviderLogicHost"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$PatternProviderReturnInventory, $PatternProviderReturnInventory$Type} from "packages/appeng/helpers/patternprovider/$PatternProviderReturnInventory"
import {$KeyCounter, $KeyCounter$Type} from "packages/appeng/api/stacks/$KeyCounter"

export class $AdvPatternProviderLogic implements $InternalInventoryHost, $ICraftingProvider {
static readonly "NBT_MEMORY_CARD_PATTERNS": string
static readonly "NBT_UNLOCK_EVENT": string
static readonly "NBT_UNLOCK_STACK": string
static readonly "NBT_PRIORITY": string
static readonly "NBT_SEND_LIST": string
static readonly "NBT_SEND_DIRECTION": string
static readonly "NBT_DIRECTION_MAP": string
static readonly "NBT_RETURN_INV": string

constructor(arg0: $IManagedGridNode$Type, arg1: $AdvPatternProviderLogicHost$Type)
constructor(arg0: $IManagedGridNode$Type, arg1: $AdvPatternProviderLogicHost$Type, arg2: integer)

public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "isBlocking"(): boolean
public "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
public "isClientSide"(): boolean
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "importSettings"(arg0: $CompoundTag$Type, arg1: $Player$Type): void
public "exportSettings"(arg0: $CompoundTag$Type): void
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "saveChanges"(): void
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "resetCraftingLock"(): void
public "getUnlockStack"(): $GenericStack
public "getReturnInv"(): $PatternProviderReturnInventory
public "getConfigManager"(): $IConfigManager
public "getCraftingLockedReason"(): $LockCraftingMode
public "updateRedstoneState"(): void
public "onMainNodeStateChanged"(): void
public "getPatternPriority"(): integer
public "clearContent"(): void
public "getPatternInv"(): $InternalInventory
public "getTerminalGroup"(): $PatternContainerGroup
public "getSortValue"(): long
public "updatePatterns"(): void
public "pushPattern"(arg0: $IPatternDetails$Type, arg1: ($KeyCounter$Type)[]): boolean
public "getAvailablePatterns"(): $List<($IPatternDetails)>
public "isBusy"(): boolean
public "addDrops"(arg0: $List$Type<($ItemStack$Type)>): void
public "getGrid"(): $IGrid
public "getTrackedCrafts"(): $Set<($AEKey)>
public "getOutputCache"(): $HashSet<($AEKey)>
public static "requestUpdate"(arg0: $IManagedGridNode$Type): void
public "getEmitableItems"(): $Set<($AEKey)>
set "priority"(value: integer)
get "priority"(): integer
get "blocking"(): boolean
get "clientSide"(): boolean
get "unlockStack"(): $GenericStack
get "returnInv"(): $PatternProviderReturnInventory
get "configManager"(): $IConfigManager
get "craftingLockedReason"(): $LockCraftingMode
get "patternPriority"(): integer
get "patternInv"(): $InternalInventory
get "terminalGroup"(): $PatternContainerGroup
get "sortValue"(): long
get "availablePatterns"(): $List<($IPatternDetails)>
get "busy"(): boolean
get "grid"(): $IGrid
get "trackedCrafts"(): $Set<($AEKey)>
get "outputCache"(): $HashSet<($AEKey)>
get "emitableItems"(): $Set<($AEKey)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvPatternProviderLogic$Type = ($AdvPatternProviderLogic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvPatternProviderLogic_ = $AdvPatternProviderLogic$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/patterns/$AdvProcessingPatternItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ProcessingPatternItem, $ProcessingPatternItem$Type} from "packages/appeng/crafting/pattern/$ProcessingPatternItem"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AdvProcessingPatternItem extends $ProcessingPatternItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvProcessingPatternItem$Type = ($AdvProcessingPatternItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvProcessingPatternItem_ = $AdvProcessingPatternItem$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/fluids/$QuantumInfusionBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$ImmutableList, $ImmutableList$Type} from "packages/com/google/common/collect/$ImmutableList"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$LiquidBlock, $LiquidBlock$Type} from "packages/net/minecraft/world/level/block/$LiquidBlock"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $QuantumInfusionBlock extends $LiquidBlock {
static readonly "LEVEL": $IntegerProperty
static readonly "STABLE_SHAPE": $VoxelShape
static readonly "POSSIBLE_FLOW_DIRECTIONS": $ImmutableList<($Direction)>
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumInfusionBlock$Type = ($QuantumInfusionBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumInfusionBlock_ = $QuantumInfusionBlock$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/fluids/$QuantumInfusionFluidType" {
import {$Lazy, $Lazy$Type} from "packages/net/minecraftforge/common/util/$Lazy"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$WaterBasedFluidType, $WaterBasedFluidType$Type} from "packages/net/pedroksl/ae2addonlib/util/$WaterBasedFluidType"
import {$IClientFluidTypeExtensions, $IClientFluidTypeExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientFluidTypeExtensions"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FluidType, $FluidType$Type} from "packages/net/minecraftforge/fluids/$FluidType"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $QuantumInfusionFluidType extends $WaterBasedFluidType {
static readonly "BUCKET_VOLUME": integer
static readonly "SIZE": $Lazy<(integer)>

constructor()

public "canConvertToSource"(arg0: $FluidState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public static "of"(arg0: $FluidState$Type): $IClientFluidTypeExtensions
public static "of"(arg0: $FluidType$Type): $IClientFluidTypeExtensions
public static "of"(arg0: $Fluid$Type): $IClientFluidTypeExtensions
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumInfusionFluidType$Type = ($QuantumInfusionFluidType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumInfusionFluidType_ = $QuantumInfusionFluidType$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/items/armors/$IGridLinkedItem" {
import {$IGridLinkableHandler, $IGridLinkableHandler$Type} from "packages/appeng/api/features/$IGridLinkableHandler"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$GlobalPos, $GlobalPos$Type} from "packages/net/minecraft/core/$GlobalPos"
import {$Logger, $Logger$Type} from "packages/org/slf4j/$Logger"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"

export interface $IGridLinkedItem {

 "getLinkedPosition"(arg0: $ItemStack$Type): $GlobalPos
 "getLinkedGrid"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): $IGrid
 "getLinkedGrid"(arg0: $ItemStack$Type, arg1: $Level$Type): $IGrid
 "updateStatus"(): void
}

export namespace $IGridLinkedItem {
const LOG: $Logger
const LINKABLE_HANDLER: $IGridLinkableHandler
const TAG_ACCESS_POINT_POS: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IGridLinkedItem$Type = ($IGridLinkedItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IGridLinkedItem_ = $IGridLinkedItem$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/items/$AdvPatternProviderCapacityUpgradeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockUpgradeItem, $BlockUpgradeItem$Type} from "packages/net/pedroksl/advanced_ae/common/items/$BlockUpgradeItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AdvPatternProviderCapacityUpgradeItem extends $BlockUpgradeItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvPatternProviderCapacityUpgradeItem$Type = ($AdvPatternProviderCapacityUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvPatternProviderCapacityUpgradeItem_ = $AdvPatternProviderCapacityUpgradeItem$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/items/upgrades/$UpgradeType$ApplicationType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $UpgradeType$ApplicationType extends $Enum<($UpgradeType$ApplicationType)> {
static readonly "PASSIVE": $UpgradeType$ApplicationType
static readonly "PASSIVE_USE": $UpgradeType$ApplicationType
static readonly "BUFF": $UpgradeType$ApplicationType


public static "values"(): ($UpgradeType$ApplicationType)[]
public static "valueOf"(arg0: string): $UpgradeType$ApplicationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeType$ApplicationType$Type = (("passive_use") | ("passive") | ("buff")) | ($UpgradeType$ApplicationType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeType$ApplicationType_ = $UpgradeType$ApplicationType$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/items/upgrades/$UpgradeType$Ability" {
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $UpgradeType$Ability {

 "execute"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): boolean

(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): boolean
}

export namespace $UpgradeType$Ability {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeType$Ability$Type = ($UpgradeType$Ability);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeType$Ability_ = $UpgradeType$Ability$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/items/$AdvPatternProviderUpgradeItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$BlockUpgradeItem, $BlockUpgradeItem$Type} from "packages/net/pedroksl/advanced_ae/common/items/$BlockUpgradeItem"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $AdvPatternProviderUpgradeItem extends $BlockUpgradeItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvPatternProviderUpgradeItem$Type = ($AdvPatternProviderUpgradeItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvPatternProviderUpgradeItem_ = $AdvPatternProviderUpgradeItem$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/logic/$ElapsedTimeTracker" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export class $ElapsedTimeTracker {

constructor()
constructor(arg0: $CompoundTag$Type)

public "writeToNBT"(): $CompoundTag
public "getProgress"(): float
/**
 * 
 * @deprecated
 */
public "getStartItemCount"(): long
public "getElapsedTime"(): long
/**
 * 
 * @deprecated
 */
public "getRemainingItemCount"(): long
get "progress"(): float
get "startItemCount"(): long
get "elapsedTime"(): long
get "remainingItemCount"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElapsedTimeTracker$Type = ($ElapsedTimeTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElapsedTimeTracker_ = $ElapsedTimeTracker$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/entities/$AdvPatternProviderEntity" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$AEItemKey, $AEItemKey$Type} from "packages/appeng/api/stacks/$AEItemKey"
import {$SettingsFrom, $SettingsFrom$Type} from "packages/appeng/util/$SettingsFrom"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MenuLocator, $MenuLocator$Type} from "packages/appeng/menu/locator/$MenuLocator"
import {$AdvPatternProviderLogicHost, $AdvPatternProviderLogicHost$Type} from "packages/net/pedroksl/advanced_ae/common/logic/$AdvPatternProviderLogicHost"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$ISubMenu, $ISubMenu$Type} from "packages/appeng/menu/$ISubMenu"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$AENetworkBlockEntity, $AENetworkBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkBlockEntity"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IGridNodeListener$State, $IGridNodeListener$State$Type} from "packages/appeng/api/networking/$IGridNodeListener$State"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$AdvPatternProviderLogic, $AdvPatternProviderLogic$Type} from "packages/net/pedroksl/advanced_ae/common/logic/$AdvPatternProviderLogic"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$PatternContainerGroup, $PatternContainerGroup$Type} from "packages/appeng/api/implementations/blockentities/$PatternContainerGroup"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"

export class $AdvPatternProviderEntity extends $AENetworkBlockEntity implements $AdvPatternProviderLogicHost {

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)
constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: integer)

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "importSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type, arg2: $Player$Type): void
public "exportSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type, arg2: $Player$Type): void
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "getTargets"(): $EnumSet<($Direction)>
public "returnToMainMenu"(arg0: $Player$Type, arg1: $ISubMenu$Type): void
public "getMainMenuIcon"(): $ItemStack
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "updateState"(): void
public "onMainNodeStateChanged"(arg0: $IGridNodeListener$State$Type): void
public "m_183515_"(arg0: $CompoundTag$Type): void
public "setBlockState"(arg0: $BlockState$Type): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "onReady"(): void
public "openMenu"(arg0: $Player$Type, arg1: $MenuLocator$Type): void
public "getLogic"(): $AdvPatternProviderLogic
public "getTerminalIcon"(): $AEItemKey
public "clearContent"(): void
public "setPriority"(arg0: integer): void
public "getPriority"(): integer
public "getBlockEntity"(): $BlockEntity
public "saveChanges"(): void
public "getConfigManager"(): $IConfigManager
public "isVisibleInTerminal"(): boolean
public "getTerminalPatternInventory"(): $InternalInventory
public "getTerminalSortOrder"(): long
public "getTerminalGroup"(): $PatternContainerGroup
public "getGrid"(): $IGrid
public static "tryClear"(arg0: any): void
get "targets"(): $EnumSet<($Direction)>
get "mainMenuIcon"(): $ItemStack
set "blockState"(value: $BlockState$Type)
get "logic"(): $AdvPatternProviderLogic
get "terminalIcon"(): $AEItemKey
set "priority"(value: integer)
get "priority"(): integer
get "blockEntity"(): $BlockEntity
get "configManager"(): $IConfigManager
get "visibleInTerminal"(): boolean
get "terminalPatternInventory"(): $InternalInventory
get "terminalSortOrder"(): long
get "terminalGroup"(): $PatternContainerGroup
get "grid"(): $IGrid
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvPatternProviderEntity$Type = ($AdvPatternProviderEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AdvPatternProviderEntity_ = $AdvPatternProviderEntity$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/items/upgrades/$UpgradeType" {
import {$UpgradeType$SettingType, $UpgradeType$SettingType$Type} from "packages/net/pedroksl/advanced_ae/common/items/upgrades/$UpgradeType$SettingType"
import {$UpgradeType$ExtraSettings, $UpgradeType$ExtraSettings$Type} from "packages/net/pedroksl/advanced_ae/common/items/upgrades/$UpgradeType$ExtraSettings"
import {$UpgradeType$Ability, $UpgradeType$Ability$Type} from "packages/net/pedroksl/advanced_ae/common/items/upgrades/$UpgradeType$Ability"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$UpgradeType$ApplicationType, $UpgradeType$ApplicationType$Type} from "packages/net/pedroksl/advanced_ae/common/items/upgrades/$UpgradeType$ApplicationType"
import {$LibItemDefinition, $LibItemDefinition$Type} from "packages/net/pedroksl/ae2addonlib/registry/helpers/$LibItemDefinition"
import {$UpgradeSettings, $UpgradeSettings$Type} from "packages/net/pedroksl/advanced_ae/common/items/upgrades/$UpgradeSettings"
import {$MutableComponent, $MutableComponent$Type} from "packages/net/minecraft/network/chat/$MutableComponent"

export class $UpgradeType extends $Enum<($UpgradeType)> {
static readonly "EMPTY": $UpgradeType
static readonly "WALK_SPEED": $UpgradeType
static readonly "SPRINT_SPEED": $UpgradeType
static readonly "STEP_ASSIST": $UpgradeType
static readonly "JUMP_HEIGHT": $UpgradeType
static readonly "LAVA_IMMUNITY": $UpgradeType
static readonly "FLIGHT": $UpgradeType
static readonly "WATER_BREATHING": $UpgradeType
static readonly "AUTO_FEED": $UpgradeType
static readonly "AUTO_STOCK": $UpgradeType
static readonly "MAGNET": $UpgradeType
static readonly "HP_BUFFER": $UpgradeType
static readonly "EVASION": $UpgradeType
static readonly "REGENERATION": $UpgradeType
static readonly "STRENGTH": $UpgradeType
static readonly "ATTACK_SPEED": $UpgradeType
static readonly "LUCK": $UpgradeType
static readonly "REACH": $UpgradeType
static readonly "SWIM_SPEED": $UpgradeType
static readonly "NIGHT_VISION": $UpgradeType
static readonly "FLIGHT_DRIFT": $UpgradeType
static readonly "CHARGING": $UpgradeType
static readonly "WORKBENCH": $UpgradeType
static readonly "PICK_CRAFT": $UpgradeType
readonly "name": string
readonly "ability": $UpgradeType$Ability
readonly "applicationType": $UpgradeType$ApplicationType


public static "values"(): ($UpgradeType)[]
public static "valueOf"(arg0: string): $UpgradeType
public "item"(): $LibItemDefinition<(any)>
public "getSettings"(): $UpgradeSettings
public "getTranslatedName"(): $Component
public "getTranslationKey"(): string
public "getTooltip"(): $MutableComponent
public "getCost"(): integer
public "getExtraSettings"(): $UpgradeType$ExtraSettings
public "getApplicationType"(): $UpgradeType$ApplicationType
public "getSettingType"(): $UpgradeType$SettingType
get "settings"(): $UpgradeSettings
get "translatedName"(): $Component
get "translationKey"(): string
get "tooltip"(): $MutableComponent
get "cost"(): integer
get "extraSettings"(): $UpgradeType$ExtraSettings
get "applicationType"(): $UpgradeType$ApplicationType
get "settingType"(): $UpgradeType$SettingType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeType$Type = (("walk_speed") | ("flight") | ("night_vision") | ("luck") | ("strength") | ("pick_craft") | ("regeneration") | ("swim_speed") | ("reach") | ("water_breathing") | ("charging") | ("jump_height") | ("lava_immunity") | ("attack_speed") | ("hp_buffer") | ("magnet") | ("empty") | ("auto_feed") | ("flight_drift") | ("sprint_speed") | ("step_assist") | ("auto_stock") | ("evasion") | ("workbench")) | ($UpgradeType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeType_ = $UpgradeType$Type;
}}
declare module "packages/net/pedroksl/ae2addonlib/recipes/$IngredientStack$Item" {
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$IngredientStack, $IngredientStack$Type} from "packages/net/pedroksl/ae2addonlib/recipes/$IngredientStack"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $IngredientStack$Item extends $IngredientStack<($Ingredient), ($ItemStack)> {
static readonly "CODEC": $Codec<($IngredientStack$Item)>

constructor(arg0: $Ingredient$Type, arg1: integer)

public "getStackAmount"(arg0: $ItemStack$Type): integer
public "setStackAmount"(arg0: $ItemStack$Type, arg1: integer): void
public "test"(arg0: $ItemStack$Type): boolean
public static "fromJson"(arg0: $JsonElement$Type): $IngredientStack$Item
public "toJson"(): $JsonElement
public static "fromNetwork"(arg0: $FriendlyByteBuf$Type): $IngredientStack$Item
public "checkType"(arg0: any): boolean
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientStack$Item$Type = ($IngredientStack$Item);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientStack$Item_ = $IngredientStack$Item$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/items/upgrades/$QuantumUpgradeBaseItem" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/pedroksl/advanced_ae/common/items/upgrades/$UpgradeType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $QuantumUpgradeBaseItem extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)
constructor(arg0: $UpgradeType$Type, arg1: $Item$Properties$Type)

public "getType"(): $UpgradeType
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
get "type"(): $UpgradeType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumUpgradeBaseItem$Type = ($QuantumUpgradeBaseItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumUpgradeBaseItem_ = $QuantumUpgradeBaseItem$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/blocks/$SmallAdvPatternProviderBlock" {
import {$SmallAdvPatternProviderEntity, $SmallAdvPatternProviderEntity$Type} from "packages/net/pedroksl/advanced_ae/common/entities/$SmallAdvPatternProviderEntity"
import {$AEBaseEntityBlock, $AEBaseEntityBlock$Type} from "packages/appeng/block/$AEBaseEntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $SmallAdvPatternProviderBlock extends $AEBaseEntityBlock<($SmallAdvPatternProviderEntity)> {
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "setSide"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): void
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "onActivated"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $InteractionHand$Type, arg4: $ItemStack$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmallAdvPatternProviderBlock$Type = ($SmallAdvPatternProviderBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SmallAdvPatternProviderBlock_ = $SmallAdvPatternProviderBlock$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/recipes/$ReactionChamberRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$IngredientStack, $IngredientStack$Type} from "packages/net/pedroksl/ae2addonlib/recipes/$IngredientStack"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IngredientStack$Fluid, $IngredientStack$Fluid$Type} from "packages/net/pedroksl/ae2addonlib/recipes/$IngredientStack$Fluid"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IngredientStack$Item, $IngredientStack$Item$Type} from "packages/net/pedroksl/ae2addonlib/recipes/$IngredientStack$Item"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $ReactionChamberRecipe implements $Recipe<($Container)> {
static readonly "TYPE_ID": $ResourceLocation
static readonly "TYPE": $RecipeType<($ReactionChamberRecipe)>
 "id": $ResourceLocation
readonly "inputs": $List<($IngredientStack$Item)>
readonly "fluid": $IngredientStack$Fluid
readonly "output": $GenericStack

constructor(arg0: $ResourceLocation$Type, arg1: $GenericStack$Type, arg2: $List$Type<($IngredientStack$Item$Type)>, arg3: $IngredientStack$Fluid$Type, arg4: integer)

public "getInputs"(): $List<($IngredientStack$Item)>
public "getId"(): $ResourceLocation
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "getEnergy"(): integer
public "getFluid"(): $IngredientStack$Fluid
public "getResultFluid"(): $FluidStack
public "isItemOutput"(): boolean
public "getValidInputs"(): $List<($IngredientStack<(any), (any)>)>
public "matches"(arg0: $Container$Type, arg1: $Level$Type): boolean
public "assemble"(arg0: $Container$Type, arg1: $RegistryAccess$Type): $ItemStack
public "isSpecial"(): boolean
public "getResultItem"(): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getSerializer"(): $RecipeSerializer<(any)>
public "containsIngredient"(arg0: $ItemStack$Type): boolean
public "containsIngredient"(arg0: $FluidStack$Type): boolean
public "getIngredients"(): $NonNullList<($Ingredient)>
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $Container$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "getType"(): $ResourceLocation
public "getMod"(): string
public "getSchema"(): $RecipeSchema
public "getGroup"(): string
public "setGroup"(group: string): void
public "getOrCreateId"(): $ResourceLocation
public "hasOutput"(match: $ReplacementMatch$Type): boolean
public "hasInput"(match: $ReplacementMatch$Type): boolean
public "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
public "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
get "inputs"(): $List<($IngredientStack$Item)>
get "id"(): $ResourceLocation
get "energy"(): integer
get "fluid"(): $IngredientStack$Fluid
get "resultFluid"(): $FluidStack
get "itemOutput"(): boolean
get "validInputs"(): $List<($IngredientStack<(any), (any)>)>
get "special"(): boolean
get "resultItem"(): $ItemStack
get "serializer"(): $RecipeSerializer<(any)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "incomplete"(): boolean
get "toastSymbol"(): $ItemStack
get "type"(): $ResourceLocation
get "mod"(): string
get "schema"(): $RecipeSchema
get "group"(): string
set "group"(value: string)
get "orCreateId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactionChamberRecipe$Type = ($ReactionChamberRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactionChamberRecipe_ = $ReactionChamberRecipe$Type;
}}
declare module "packages/net/pedroksl/ae2addonlib/recipes/$IngredientStack$Fluid" {
import {$Fluid, $Fluid$Type} from "packages/net/minecraft/world/level/material/$Fluid"
import {$JsonElement, $JsonElement$Type} from "packages/com/google/gson/$JsonElement"
import {$IngredientStack, $IngredientStack$Type} from "packages/net/pedroksl/ae2addonlib/recipes/$IngredientStack"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $IngredientStack$Fluid extends $IngredientStack<($Fluid), ($FluidStack)> {
static readonly "CODEC": $Codec<($IngredientStack$Fluid)>

constructor(arg0: $FluidStack$Type)
constructor(arg0: $Fluid$Type, arg1: integer)

public "getStackAmount"(arg0: $FluidStack$Type): integer
public "setStackAmount"(arg0: $FluidStack$Type, arg1: integer): void
public "test"(arg0: $FluidStack$Type): boolean
public "getStack"(): $FluidStack
public static "fromJson"(arg0: $JsonElement$Type): $IngredientStack$Fluid
public "toJson"(): $JsonElement
public static "fromNetwork"(arg0: $FriendlyByteBuf$Type): $IngredientStack$Fluid
public "checkType"(arg0: any): boolean
public "toNetwork"(arg0: $FriendlyByteBuf$Type): void
get "stack"(): $FluidStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IngredientStack$Fluid$Type = ($IngredientStack$Fluid);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IngredientStack$Fluid_ = $IngredientStack$Fluid$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/entities/$ReactionChamberEntity" {
import {$ReactionChamberRecipe, $ReactionChamberRecipe$Type} from "packages/net/pedroksl/advanced_ae/recipes/$ReactionChamberRecipe"
import {$TickingRequest, $TickingRequest$Type} from "packages/appeng/api/networking/ticking/$TickingRequest"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$FluidStack, $FluidStack$Type} from "packages/net/minecraftforge/fluids/$FluidStack"
import {$IGridNode, $IGridNode$Type} from "packages/appeng/api/networking/$IGridNode"
import {$SettingsFrom, $SettingsFrom$Type} from "packages/appeng/util/$SettingsFrom"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$TickRateModulation, $TickRateModulation$Type} from "packages/appeng/api/networking/ticking/$TickRateModulation"
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GenericStackInv, $GenericStackInv$Type} from "packages/appeng/helpers/externalstorage/$GenericStackInv"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$RelativeSide, $RelativeSide$Type} from "packages/appeng/api/orientation/$RelativeSide"
import {$ISubMenu, $ISubMenu$Type} from "packages/appeng/menu/$ISubMenu"
import {$IUpgradeInventory, $IUpgradeInventory$Type} from "packages/appeng/api/upgrades/$IUpgradeInventory"
import {$IConfigManager, $IConfigManager$Type} from "packages/appeng/api/util/$IConfigManager"
import {$AENetworkPowerBlockEntity, $AENetworkPowerBlockEntity$Type} from "packages/appeng/blockentity/grid/$AENetworkPowerBlockEntity"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$AECableType, $AECableType$Type} from "packages/appeng/api/util/$AECableType"
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$IGridTickable, $IGridTickable$Type} from "packages/appeng/api/networking/ticking/$IGridTickable"
import {$IConfigurableObject, $IConfigurableObject$Type} from "packages/appeng/api/util/$IConfigurableObject"
import {$IUpgradeableObject, $IUpgradeableObject$Type} from "packages/appeng/api/upgrades/$IUpgradeableObject"
import {$IDirectionalOutputHost, $IDirectionalOutputHost$Type} from "packages/net/pedroksl/ae2addonlib/api/$IDirectionalOutputHost"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"

export class $ReactionChamberEntity extends $AENetworkPowerBlockEntity implements $IGridTickable, $IUpgradeableObject, $IConfigurableObject, $IDirectionalOutputHost {
static readonly "NBT_ALLOWED_SIDES": string

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "getInput"(): $InternalInventory
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "importSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type, arg2: $Player$Type): void
public "exportSettings"(arg0: $SettingsFrom$Type, arg1: $CompoundTag$Type, arg2: $Player$Type): void
public "getSubInventory"(arg0: $ResourceLocation$Type): $InternalInventory
public "addAdditionalDrops"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "getFluidStack"(): $FluidStack
public "getOutput"(): $InternalInventory
public "showWarning"(): boolean
public "updateOutputSides"(arg0: $EnumSet$Type<($RelativeSide$Type)>): void
public "clearFluidOut"(): void
public "clearFluid"(): void
public "returnToMainMenu"(arg0: $Player$Type, arg1: $ISubMenu$Type): void
public "getMainMenuIcon"(): $ItemStack
public "onChangeInventory"(arg0: $InternalInventory$Type, arg1: integer): void
public "getUpgrades"(): $IUpgradeInventory
public "getConfigManager"(): $IConfigManager
public "onChangeTank"(): void
public "setWorking"(arg0: boolean): void
public "getTank"(): $GenericStackInv
public "getGridConnectableSides"(arg0: $BlockOrientation$Type): $Set<($Direction)>
public "getCableConnectionType"(arg0: $Direction$Type): $AECableType
public "getMaxProcessingTime"(): integer
public "getTask"(): $ReactionChamberRecipe
public "setShowWarning"(arg0: boolean): void
public "getBlockPosition"(): $BlockPos
public "getAllowedOutputs"(): $EnumSet<($RelativeSide)>
public "m_183515_"(arg0: $CompoundTag$Type): void
public "setRemoved"(): void
public "loadTag"(arg0: $CompoundTag$Type): void
public "getProcessingTime"(): integer
public "isWorking"(): boolean
public "getInternalInventory"(): $InternalInventory
public "clearContent"(): void
public "tickingRequest"(arg0: $IGridNode$Type, arg1: integer): $TickRateModulation
public "getTickingRequest"(arg0: $IGridNode$Type): $TickingRequest
public "isUpgradedWith"(arg0: $ItemLike$Type): boolean
public "getInstalledUpgrades"(arg0: $ItemLike$Type): integer
public "getOrientation"(): $BlockOrientation
public "saveChanges"(): void
public "isClientSide"(): boolean
public static "tryClear"(arg0: any): void
get "input"(): $InternalInventory
get "fluidStack"(): $FluidStack
get "output"(): $InternalInventory
get "mainMenuIcon"(): $ItemStack
get "upgrades"(): $IUpgradeInventory
get "configManager"(): $IConfigManager
set "working"(value: boolean)
get "tank"(): $GenericStackInv
get "maxProcessingTime"(): integer
get "task"(): $ReactionChamberRecipe
get "blockPosition"(): $BlockPos
get "allowedOutputs"(): $EnumSet<($RelativeSide)>
get "processingTime"(): integer
get "working"(): boolean
get "internalInventory"(): $InternalInventory
get "orientation"(): $BlockOrientation
get "clientSide"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactionChamberEntity$Type = ($ReactionChamberEntity);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactionChamberEntity_ = $ReactionChamberEntity$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/items/upgrades/$UpgradeSettings" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"

export class $UpgradeSettings {
 "minValue": integer
 "maxValue": integer
 "multiplier": float
 "defaultValue": integer

constructor(arg0: integer, arg1: integer, arg2: float, arg3: integer)
constructor(arg0: integer, arg1: integer, arg2: float)
constructor(arg0: integer, arg1: integer)
constructor(arg0: integer)

public "toBytes"(arg0: $FriendlyByteBuf$Type): void
public "getDefaultValue"(): integer
public "getMultiplier"(): float
public "getMinValue"(): integer
public "getMaxValue"(): integer
public static "fromBytes"(arg0: $FriendlyByteBuf$Type): $UpgradeSettings
get "defaultValue"(): integer
get "multiplier"(): float
get "minValue"(): integer
get "maxValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeSettings$Type = ($UpgradeSettings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeSettings_ = $UpgradeSettings$Type;
}}
declare module "packages/net/pedroksl/ae2addonlib/api/$IDirectionalOutputHost" {
import {$EnumSet, $EnumSet$Type} from "packages/java/util/$EnumSet"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockOrientation, $BlockOrientation$Type} from "packages/appeng/api/orientation/$BlockOrientation"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ISubMenuHost, $ISubMenuHost$Type} from "packages/appeng/api/storage/$ISubMenuHost"
import {$RelativeSide, $RelativeSide$Type} from "packages/appeng/api/orientation/$RelativeSide"
import {$ISubMenu, $ISubMenu$Type} from "packages/appeng/menu/$ISubMenu"

export interface $IDirectionalOutputHost extends $ISubMenuHost {

 "getOrientation"(): $BlockOrientation
 "updateOutputSides"(arg0: $EnumSet$Type<($RelativeSide$Type)>): void
 "getBlockPosition"(): $BlockPos
 "getAllowedOutputs"(): $EnumSet<($RelativeSide)>
 "returnToMainMenu"(arg0: $Player$Type, arg1: $ISubMenu$Type): void
 "getMainMenuIcon"(): $ItemStack
}

export namespace $IDirectionalOutputHost {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDirectionalOutputHost$Type = ($IDirectionalOutputHost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDirectionalOutputHost_ = $IDirectionalOutputHost$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/fluids/$QuantumInfusionFluid$Source" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$QuantumInfusionFluid, $QuantumInfusionFluid$Type} from "packages/net/pedroksl/advanced_ae/common/fluids/$QuantumInfusionFluid"
import {$ForgeFlowingFluid$Properties, $ForgeFlowingFluid$Properties$Type} from "packages/net/minecraftforge/fluids/$ForgeFlowingFluid$Properties"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"

export class $QuantumInfusionFluid$Source extends $QuantumInfusionFluid {
static readonly "PROPERTIES": $ForgeFlowingFluid$Properties
static readonly "FALLING": $BooleanProperty
static readonly "LEVEL": $IntegerProperty
static readonly "FLUID_STATE_REGISTRY": $IdMapper<($FluidState)>

constructor()

public "isSource"(arg0: $FluidState$Type): boolean
public "getAmount"(arg0: $FluidState$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumInfusionFluid$Source$Type = ($QuantumInfusionFluid$Source);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumInfusionFluid$Source_ = $QuantumInfusionFluid$Source$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/blocks/$AAEAbstractCraftingUnitBlock" {
import {$IntegerProperty, $IntegerProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$IntegerProperty"
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$AEBaseEntityBlock, $AEBaseEntityBlock$Type} from "packages/appeng/block/$AEBaseEntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$AEBaseBlockEntity, $AEBaseBlockEntity$Type} from "packages/appeng/blockentity/$AEBaseBlockEntity"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ICraftingUnitType, $ICraftingUnitType$Type} from "packages/appeng/block/crafting/$ICraftingUnitType"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $AAEAbstractCraftingUnitBlock<T extends $AEBaseBlockEntity> extends $AEBaseEntityBlock<(T)> {
static readonly "FORMED": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "MULTIBLOCKED": $BooleanProperty
static readonly "LIGHT_LEVEL": $IntegerProperty
readonly "type": $ICraftingUnitType
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $ICraftingUnitType$Type)

public "updateShape"(arg0: $BlockState$Type, arg1: $Direction$Type, arg2: $BlockState$Type, arg3: $LevelAccessor$Type, arg4: $BlockPos$Type, arg5: $BlockPos$Type): $BlockState
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AAEAbstractCraftingUnitBlock$Type<T> = ($AAEAbstractCraftingUnitBlock<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AAEAbstractCraftingUnitBlock_<T> = $AAEAbstractCraftingUnitBlock$Type<(T)>;
}}
declare module "packages/net/pedroksl/advanced_ae/recipes/$ReactionChamberRecipeSerializer" {
import {$ReactionChamberRecipe, $ReactionChamberRecipe$Type} from "packages/net/pedroksl/advanced_ae/recipes/$ReactionChamberRecipe"
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $ReactionChamberRecipeSerializer implements $RecipeSerializer<($ReactionChamberRecipe)> {
static readonly "INSTANCE": $ReactionChamberRecipeSerializer
static readonly "GENERIC_STACK_CODEC": $Codec<($GenericStack)>


public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $ReactionChamberRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $ReactionChamberRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $ReactionChamberRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $ReactionChamberRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactionChamberRecipeSerializer$Type = ($ReactionChamberRecipeSerializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactionChamberRecipeSerializer_ = $ReactionChamberRecipeSerializer$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/items/armors/$QuantumLeggings" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$ItemDisplayParameters"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$QuantumArmorBase, $QuantumArmorBase$Type} from "packages/net/pedroksl/advanced_ae/common/items/armors/$QuantumArmorBase"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $QuantumLeggings extends $QuantumArmorBase {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public static "getId"(arg0: $ItemStack$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$Type, arg1: $CreativeModeTab$Output$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumLeggings$Type = ($QuantumLeggings);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumLeggings_ = $QuantumLeggings$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/items/armors/$QuantumBoots" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$ItemDisplayParameters"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$QuantumArmorBase, $QuantumArmorBase$Type} from "packages/net/pedroksl/advanced_ae/common/items/armors/$QuantumArmorBase"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $QuantumBoots extends $QuantumArmorBase {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public static "getId"(arg0: $ItemStack$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$Type, arg1: $CreativeModeTab$Output$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumBoots$Type = ($QuantumBoots);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumBoots_ = $QuantumBoots$Type;
}}
declare module "packages/net/pedroksl/ae2addonlib/registry/helpers/$LibItemDefinition" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ItemDefinition, $ItemDefinition$Type} from "packages/appeng/core/definitions/$ItemDefinition"
import {$Holder, $Holder$Type} from "packages/net/minecraft/core/$Holder"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ItemLike, $ItemLike$Type} from "packages/net/minecraft/world/level/$ItemLike"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryObject, $RegistryObject$Type} from "packages/net/minecraftforge/registries/$RegistryObject"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"

export class $LibItemDefinition<T extends $Item> implements $ItemLike, $Supplier<(T)> {

constructor(arg0: string, arg1: $RegistryObject$Type<(T)>)

public "get"(): T
public "id"(): $ResourceLocation
public "stack"(): $ItemStack
public "stack"(arg0: integer): $ItemStack
public "is"(arg0: $ItemStack$Type): boolean
public "is"(arg0: $AEKey$Type): boolean
public "holder"(): $Holder<(T)>
public "getEnglishName"(): string
public "genericStack"(arg0: long): $GenericStack
/**
 * 
 * @deprecated
 */
public "isSameAs"(arg0: $ItemStack$Type): boolean
public "isSameAs"(arg0: $AEKey$Type): boolean
public "asItem"(): T
public "getItemDefinition"(): $ItemDefinition<(T)>
get "englishName"(): string
get "itemDefinition"(): $ItemDefinition<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LibItemDefinition$Type<T> = ($LibItemDefinition<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $LibItemDefinition_<T> = $LibItemDefinition$Type<(T)>;
}}
declare module "packages/net/pedroksl/advanced_ae/common/helpers/$AutoCraftingContainer" {
import {$InternalInventory, $InternalInventory$Type} from "packages/appeng/api/inventories/$InternalInventory"
import {$LinkedHashMap, $LinkedHashMap$Type} from "packages/java/util/$LinkedHashMap"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MenuLocator, $MenuLocator$Type} from "packages/appeng/menu/locator/$MenuLocator"
import {$AEKey, $AEKey$Type} from "packages/appeng/api/stacks/$AEKey"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"

export interface $AutoCraftingContainer {

 "setStockAmount"(arg0: integer, arg1: integer, arg2: long): void
 "setMaxCrafted"(arg0: integer, arg1: long): void
 "toggleEnablePattern"(arg0: integer): void
 "getInvalidPatternSlots"(): $List<(boolean)>
 "getPatternConfigInputs"(arg0: integer): $LinkedHashMap<($AEKey), (long)>
 "getPatternConfigOutput"(arg0: integer): $Pair<($AEKey), (long)>
 "getEnabledPatternSlots"(): $List<(boolean)>
 "getLocator"(): $MenuLocator
 "isVisibleInTerminal"(): boolean
 "getTerminalPatternInventory"(): $InternalInventory
 "getTerminalSortOrder"(): long
 "getGrid"(): $IGrid
}

export namespace $AutoCraftingContainer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutoCraftingContainer$Type = ($AutoCraftingContainer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AutoCraftingContainer_ = $AutoCraftingContainer$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/blocks/$ReactionChamberBlock" {
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$AEBaseEntityBlock, $AEBaseEntityBlock$Type} from "packages/appeng/block/$AEBaseEntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$ReactionChamberEntity, $ReactionChamberEntity$Type} from "packages/net/pedroksl/advanced_ae/common/entities/$ReactionChamberEntity"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$IOrientationStrategy, $IOrientationStrategy$Type} from "packages/appeng/api/orientation/$IOrientationStrategy"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $ReactionChamberBlock extends $AEBaseEntityBlock<($ReactionChamberEntity)> {
static readonly "WORKING": $BooleanProperty
/**
 * 
 * @deprecated
 */
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "UPDATE_CLIENTS": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INDESTRUCTIBLE": float
static readonly "INSTANT": float
static readonly "UPDATE_LIMIT": integer
 "stateDefinition": $StateDefinition<($Block), ($BlockState)>
readonly "properties": $BlockBehaviour$Properties

constructor()

public "onActivated"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $InteractionHand$Type, arg4: $ItemStack$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getOrientationStrategy"(): $IOrientationStrategy
public "useBucket"(arg0: $Player$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $ItemStack$Type, arg4: $InteractionHand$Type): boolean
get "orientationStrategy"(): $IOrientationStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactionChamberBlock$Type = ($ReactionChamberBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactionChamberBlock_ = $ReactionChamberBlock$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/items/armors/$QuantumHelmet" {
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ItemMenuHost, $ItemMenuHost$Type} from "packages/appeng/api/implementations/menuobjects/$ItemMenuHost"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$ItemDisplayParameters"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$GeoAnimatable, $GeoAnimatable$Type} from "packages/software/bernie/geckolib/core/animatable/$GeoAnimatable"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$QuantumArmorBase, $QuantumArmorBase$Type} from "packages/net/pedroksl/advanced_ae/common/items/armors/$QuantumArmorBase"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $QuantumHelmet extends $QuantumArmorBase {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "openPortableWorkbench"(arg0: $Player$Type, arg1: integer, arg2: $ItemStack$Type): boolean
public "openPortableWorkbench"(arg0: $Player$Type, arg1: integer, arg2: $ItemStack$Type, arg3: boolean): boolean
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "getMenuHost"(arg0: $Player$Type, arg1: integer, arg2: $ItemStack$Type, arg3: $BlockPos$Type): $ItemMenuHost
public "openFromEquipmentSlot"(arg0: $Player$Type, arg1: integer, arg2: $ItemStack$Type, arg3: boolean): boolean
public static "getId"(arg0: $ItemStack$Type): long
public static "registerSyncedAnimatable"(arg0: $GeoAnimatable$Type): void
public static "getOrAssignId"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): long
public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$Type, arg1: $CreativeModeTab$Output$Type): void
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuantumHelmet$Type = ($QuantumHelmet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $QuantumHelmet_ = $QuantumHelmet$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/items/armors/$IUpgradeableItem" {
import {$IGridLinkedItem, $IGridLinkedItem$Type} from "packages/net/pedroksl/advanced_ae/common/items/armors/$IGridLinkedItem"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$GlobalPos, $GlobalPos$Type} from "packages/net/minecraft/core/$GlobalPos"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IGrid, $IGrid$Type} from "packages/appeng/api/networking/$IGrid"
import {$UpgradeType, $UpgradeType$Type} from "packages/net/pedroksl/advanced_ae/common/items/upgrades/$UpgradeType"
import {$GenericStack, $GenericStack$Type} from "packages/appeng/api/stacks/$GenericStack"

export interface $IUpgradeableItem extends $IGridLinkedItem {

 "getFilter"(arg0: $ItemStack$Type, arg1: $UpgradeType$Type): $List<($GenericStack)>
 "setFilter"(arg0: $ItemStack$Type, arg1: $UpgradeType$Type, arg2: $List$Type<($GenericStack$Type)>): void
 "hasUpgrade"(arg0: $ItemStack$Type, arg1: $UpgradeType$Type): boolean
 "getUpgradeValue"(arg0: $ItemStack$Type, arg1: $UpgradeType$Type, arg2: integer): integer
 "consumeEnergy"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: integer): void
 "consumeEnergy"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: $UpgradeType$Type): void
 "applyUpgrade"(arg0: $ItemStack$Type, arg1: $UpgradeType$Type): boolean
 "getAppliedUpgrades"(arg0: $ItemStack$Type): $List<($UpgradeType)>
 "getPassiveUpgrades"(arg0: $ItemStack$Type): $List<($UpgradeType)>
 "isUpgradeEnabled"(arg0: $ItemStack$Type, arg1: $UpgradeType$Type): boolean
 "isUpgradePowered"(arg0: $ItemStack$Type, arg1: $UpgradeType$Type): boolean
 "isUpgradeAllowed"(arg0: $UpgradeType$Type): boolean
 "tickUpgrades"(arg0: $Level$Type, arg1: $Player$Type, arg2: $ItemStack$Type): void
 "setUpgradeValue"(arg0: $ItemStack$Type, arg1: $UpgradeType$Type, arg2: integer): void
 "removeUpgrade"(arg0: $ItemStack$Type, arg1: $UpgradeType$Type): boolean
 "getUpgradeExtra"(arg0: $ItemStack$Type, arg1: $UpgradeType$Type, arg2: boolean): boolean
 "setUpgradeExtra"(arg0: $ItemStack$Type, arg1: $UpgradeType$Type, arg2: boolean): void
 "toggleUpgrade"(arg0: $ItemStack$Type, arg1: $UpgradeType$Type, arg2: $Player$Type): boolean
 "toggleUpgrade"(arg0: $ItemStack$Type, arg1: $UpgradeType$Type): boolean
 "getPossibleUpgrades"(): $List<($UpgradeType)>
 "isUpgradeEnabledAndPowered"(arg0: $ItemStack$Type, arg1: $UpgradeType$Type): boolean
 "getLinkedPosition"(arg0: $ItemStack$Type): $GlobalPos
 "getLinkedGrid"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): $IGrid
 "getLinkedGrid"(arg0: $ItemStack$Type, arg1: $Level$Type): $IGrid
 "updateStatus"(): void

(arg0: $ItemStack$Type, arg1: $UpgradeType$Type): $List<($GenericStack)>
}

export namespace $IUpgradeableItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeableItem$Type = ($IUpgradeableItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IUpgradeableItem_ = $IUpgradeableItem$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/items/armors/$PoweredItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$CreativeModeTab$Output, $CreativeModeTab$Output$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Output"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$IAEItemPowerStorage, $IAEItemPowerStorage$Type} from "packages/appeng/api/implementations/items/$IAEItemPowerStorage"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AccessRestriction, $AccessRestriction$Type} from "packages/appeng/api/config/$AccessRestriction"
import {$Actionable, $Actionable$Type} from "packages/appeng/api/config/$Actionable"
import {$ArmorItem$Type, $ArmorItem$Type$Type} from "packages/net/minecraft/world/item/$ArmorItem$Type"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$ItemDisplayParameters"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$ArmorMaterial, $ArmorMaterial$Type} from "packages/net/minecraft/world/item/$ArmorMaterial"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DoubleSupplier, $DoubleSupplier$Type} from "packages/java/util/function/$DoubleSupplier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PoweredItem extends $ArmorItem implements $IAEItemPowerStorage {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $ArmorMaterial$Type, arg1: $ArmorItem$Type$Type, arg2: $Item$Properties$Type, arg3: $DoubleSupplier$Type)

public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getChargeRate"(arg0: $ItemStack$Type): double
public "addToMainCreativeTab"(arg0: $CreativeModeTab$ItemDisplayParameters$Type, arg1: $CreativeModeTab$Output$Type): void
public "getAEMaxPower"(arg0: $ItemStack$Type): double
public "getPowerFlow"(arg0: $ItemStack$Type): $AccessRestriction
public "extractAEPower"(arg0: $ItemStack$Type, arg1: double, arg2: $Actionable$Type): double
public "getAECurrentPower"(arg0: $ItemStack$Type): double
public "injectAEPower"(arg0: $ItemStack$Type, arg1: double, arg2: $Actionable$Type): double
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
public static "get"(arg0: $ItemStack$Type): $Equipable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoweredItem$Type = ($PoweredItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PoweredItem_ = $PoweredItem$Type;
}}
declare module "packages/net/pedroksl/advanced_ae/common/items/upgrades/$UpgradeType$SettingType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $UpgradeType$SettingType extends $Enum<($UpgradeType$SettingType)> {
static readonly "NONE": $UpgradeType$SettingType
static readonly "NUM_INPUT": $UpgradeType$SettingType
static readonly "FILTER": $UpgradeType$SettingType
static readonly "NUM_AND_FILTER": $UpgradeType$SettingType
static readonly "BOOL_LIST": $UpgradeType$SettingType


public static "values"(): ($UpgradeType$SettingType)[]
public static "valueOf"(arg0: string): $UpgradeType$SettingType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeType$SettingType$Type = (("filter") | ("num_input") | ("bool_list") | ("num_and_filter") | ("none")) | ($UpgradeType$SettingType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $UpgradeType$SettingType_ = $UpgradeType$SettingType$Type;
}}

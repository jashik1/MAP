declare module "packages/com/brandon3055/draconicevolution/blocks/$RainSensor" {
import {$EntityBlockBCore, $EntityBlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$EntityBlockBCore"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"

export class $RainSensor extends $EntityBlockBCore {
static readonly "ACTIVE": $BooleanProperty
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "animateTick"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RainSensor$Type = ($RainSensor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $RainSensor_ = $RainSensor$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/$IDraconicMelee" {
import {$TechLevel, $TechLevel$Type} from "packages/com/brandon3055/brandonscore/api/$TechLevel"

export interface $IDraconicMelee {

 "getTechLevel"(): $TechLevel

(): $TechLevel
}

export namespace $IDraconicMelee {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDraconicMelee$Type = ($IDraconicMelee);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDraconicMelee_ = $IDraconicMelee$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/config/$ConfigProperty" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ConfigProperty$Type, $ConfigProperty$Type$Type} from "packages/com/brandon3055/draconicevolution/api/config/$ConfigProperty$Type"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$PropertyData, $PropertyData$Type} from "packages/com/brandon3055/draconicevolution/client/gui/modular/itemconfig/$PropertyData"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"

export class $ConfigProperty implements $INBTSerializable<($CompoundTag)> {

constructor(arg0: string)
constructor(arg0: string, arg1: $Component$Type)

public "getName"(): string
public "getType"(): $ConfigProperty$Type
public "getDisplayName"(): $Component
public "loadData"(arg0: $PropertyData$Type, arg1: $ItemStack$Type): void
public "generateUnique"(): void
public "showOnHud"(): boolean
public "onValueChanged"(arg0: $ItemStack$Type): void
public "getDisplayValue"(): string
public "setShowOnHud"(arg0: boolean): void
/**
 * 
 * @deprecated
 */
public "serializeMCData"(arg0: $MCDataOutput$Type): void
/**
 * 
 * @deprecated
 */
public "deSerializeMCData"(arg0: $MCDataInput$Type): void
public "getUniqueName"(): $UUID
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "validateValue"(): void
public "setDisplayName"(arg0: $Supplier$Type<($Component$Type)>): void
public "getToolTip"(): $Component
public "setToolTip"(arg0: $Supplier$Type<($Component$Type)>): void
get "name"(): string
get "type"(): $ConfigProperty$Type
get "displayName"(): $Component
get "displayValue"(): string
get "uniqueName"(): $UUID
set "displayName"(value: $Supplier$Type<($Component$Type)>)
get "toolTip"(): $Component
set "toolTip"(value: $Supplier$Type<($Component$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigProperty$Type = ($ConfigProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigProperty_ = $ConfigProperty$Type;
}}
declare module "packages/com/brandon3055/brandonscore/lib/$IMCDataSerializable" {
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"

export interface $IMCDataSerializable {

 "deSerializeMCD"(arg0: $MCDataInput$Type): void
 "serializeMCD"(arg0: $MCDataOutput$Type): void
}

export namespace $IMCDataSerializable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMCDataSerializable$Type = ($IMCDataSerializable);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IMCDataSerializable_ = $IMCDataSerializable$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/$CometSpawner" {
import {$EntityBlockBCore, $EntityBlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$EntityBlockBCore"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$CustomTabHandling, $CustomTabHandling$Type} from "packages/com/brandon3055/brandonscore/lib/$CustomTabHandling"

export class $CometSpawner extends $EntityBlockBCore implements $CustomTabHandling {
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CometSpawner$Type = ($CometSpawner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CometSpawner_ = $CometSpawner$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/crafting/$FusionRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$IFusionInventory, $IFusionInventory$Type} from "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionInventory"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IFusionRecipe, $IFusionRecipe$Type} from "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionRecipe"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$FusionRecipe$FusionIngredient, $FusionRecipe$FusionIngredient$Type} from "packages/com/brandon3055/draconicevolution/api/crafting/$FusionRecipe$FusionIngredient"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$IFusionRecipe$IFusionIngredient, $IFusionRecipe$IFusionIngredient$Type} from "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionRecipe$IFusionIngredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IFusionStateMachine, $IFusionStateMachine$Type} from "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionStateMachine"
import {$TechLevel, $TechLevel$Type} from "packages/com/brandon3055/brandonscore/api/$TechLevel"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export class $FusionRecipe implements $IFusionRecipe {

constructor(arg0: $ResourceLocation$Type, arg1: $ItemStack$Type, arg2: $Ingredient$Type, arg3: long, arg4: $TechLevel$Type, arg5: $Collection$Type<($FusionRecipe$FusionIngredient$Type)>)

public "getId"(): $ResourceLocation
public "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
public "assemble"(arg0: $IFusionInventory$Type, arg1: $RegistryAccess$Type): $ItemStack
public "getIngredients"(): $NonNullList<($Ingredient)>
public "getSerializer"(): $RecipeSerializer<(any)>
public "fusionIngredients"(): $List<($IFusionRecipe$IFusionIngredient)>
public "getRecipeTier"(): $TechLevel
public "getEnergyCost"(): long
public "getCatalyst"(): $Ingredient
public "matches"(arg0: $IFusionInventory$Type, arg1: $Level$Type): boolean
public "isSpecial"(): boolean
public "getToastSymbol"(): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "tickFusionState"(arg0: $IFusionStateMachine$Type, arg1: $IFusionInventory$Type, arg2: $Level$Type): void
public "canStartCraft"(arg0: $IFusionInventory$Type, arg1: $Level$Type, arg2: $Consumer$Type<($Component$Type)>): boolean
public static "completeCraft"(arg0: $IFusionInventory$Type, arg1: $Level$Type, arg2: $IFusionRecipe$Type): void
public "isIncomplete"(): boolean
public "getRemainingItems"(arg0: $IFusionInventory$Type): $NonNullList<($ItemStack)>
public "showNotification"(): boolean
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
get "id"(): $ResourceLocation
get "ingredients"(): $NonNullList<($Ingredient)>
get "serializer"(): $RecipeSerializer<(any)>
get "recipeTier"(): $TechLevel
get "energyCost"(): long
get "catalyst"(): $Ingredient
get "special"(): boolean
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
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
export type $FusionRecipe$Type = ($FusionRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FusionRecipe_ = $FusionRecipe$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/machines/$CraftingInjector" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$EntityBlockBCore, $EntityBlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$EntityBlockBCore"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$IHudBlock, $IHudBlock$Type} from "packages/com/brandon3055/brandonscore/api/hud/$IHudBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TechLevel, $TechLevel$Type} from "packages/com/brandon3055/brandonscore/api/$TechLevel"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$GuiRender, $GuiRender$Type} from "packages/codechicken/lib/gui/modular/lib/$GuiRender"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"

export class $CraftingInjector extends $EntityBlockBCore implements $IHudBlock {
static readonly "MSG_ID": $UUID
static readonly "FACING": $DirectionProperty
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $TechLevel$Type)

public "generateHudText"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $List$Type<($Component$Type)>): void
public "destroy"(arg0: $LevelAccessor$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): void
public "getTechLevel"(): $TechLevel
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "shouldDisplayHudText"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "renderHudContent"(arg0: $GuiRender$Type, arg1: double, arg2: double, arg3: $List$Type<($Component$Type)>): void
public "computeHudHeight"(arg0: $Minecraft$Type, arg1: $List$Type<($Component$Type)>): double
public "computeHudWidth"(arg0: $Minecraft$Type, arg1: $List$Type<($Component$Type)>): double
public "renderHudBackground"(arg0: $GuiRender$Type, arg1: double, arg2: double, arg3: $List$Type<($Component$Type)>): void
get "techLevel"(): $TechLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingInjector$Type = ($CraftingInjector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CraftingInjector_ = $CraftingInjector$Type;
}}
declare module "packages/com/brandon3055/brandonscore/lib/datamanager/$ManagedBool" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$AbstractManagedData, $AbstractManagedData$Type} from "packages/com/brandon3055/brandonscore/lib/datamanager/$AbstractManagedData"
import {$DataFlags, $DataFlags$Type} from "packages/com/brandon3055/brandonscore/lib/datamanager/$DataFlags"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"

export class $ManagedBool extends $AbstractManagedData<(boolean)> {

constructor(arg0: string, arg1: boolean, ...arg2: ($DataFlags$Type)[])
constructor(arg0: string, ...arg1: ($DataFlags$Type)[])

public "get"(): boolean
public "toString"(): string
public "toBytes"(arg0: $MCDataOutput$Type): void
public "validate"(): void
public "set"(arg0: boolean): boolean
public "fromNBT"(arg0: $CompoundTag$Type): void
public "invert"(): boolean
public "setValidator"(arg0: $Function$Type<(boolean), (boolean)>): $ManagedBool
public "fromBytes"(arg0: $MCDataInput$Type): void
public "toNBT"(arg0: $CompoundTag$Type): void
set "validator"(value: $Function$Type<(boolean), (boolean)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ManagedBool$Type = ($ManagedBool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ManagedBool_ = $ManagedBool$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/items/equipment/$IModularArmor" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModuleHostImpl, $ModuleHostImpl$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleHostImpl"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$MultiCapabilityProvider, $MultiCapabilityProvider$Type} from "packages/com/brandon3055/brandonscore/capability/$MultiCapabilityProvider"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$IModularItem, $IModularItem$Type} from "packages/com/brandon3055/draconicevolution/items/equipment/$IModularItem"
import {$TechLevel, $TechLevel$Type} from "packages/com/brandon3055/brandonscore/api/$TechLevel"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$ModularOPStorage, $ModularOPStorage$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModularOPStorage"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IFusionInventory, $IFusionInventory$Type} from "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionInventory"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ElytraEnabledItem, $ElytraEnabledItem$Type} from "packages/com/brandon3055/brandonscore/api/$ElytraEnabledItem"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IModularArmor extends $IModularItem, $ElytraEnabledItem {

 "elytraFlightTickBC"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): boolean
 "canElytraFlyBC"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "addModularItemInformation"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
 "getEnergyStored"(arg0: $ItemStack$Type): long
 "extractEnergy"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: long): long
 "m_8102_"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
 "readShareTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
 "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
 "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
 "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
 "isEquipped"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: boolean): boolean
 "getTechLevel"(): $TechLevel
 "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
 "createHost"(arg0: $ItemStack$Type): $ModuleHostImpl
 "damageBarWidth"(arg0: $ItemStack$Type): integer
 "damageBarColour"(arg0: $ItemStack$Type): integer
 "handleTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $EquipmentSlot$Type, arg3: boolean): void
 "createOPStorage"(arg0: $ItemStack$Type, arg1: $ModuleHostImpl$Type): $ModularOPStorage
 "damageBarVisible"(arg0: $ItemStack$Type): boolean
 "getBaseEfficiency"(): float
 "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $MultiCapabilityProvider
 "initCapabilities"(arg0: $ItemStack$Type, arg1: $ModuleHostImpl$Type, arg2: $MultiCapabilityProvider$Type): void
 "getEnchantmentLevel"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): integer
 "elytraFlightTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): boolean
 "getFoodProperties"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): $FoodProperties
 "canContinueUsing"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "onStopUsing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): void
 "getEquipmentSlot"(arg0: $ItemStack$Type): $EquipmentSlot
 "getMaxDamage"(arg0: $ItemStack$Type): integer
 "isDamageable"(arg0: $ItemStack$Type): boolean
 "isRepairable"(arg0: $ItemStack$Type): boolean
 "onDroppedByPlayer"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
 "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
 "isPiglinCurrency"(arg0: $ItemStack$Type): boolean
 "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
 "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "getXpRepairRatio"(arg0: $ItemStack$Type): float
 "canEquip"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: $Entity$Type): boolean
 "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
 "hasCustomEntity"(arg0: $ItemStack$Type): boolean
 "onInventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: integer, arg4: integer): void
/**
 * 
 * @deprecated
 */
 "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
 "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
 "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
 "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
 "isDamaged"(arg0: $ItemStack$Type): boolean
 "getCreatorModId"(arg0: $ItemStack$Type): string
 "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
 "onHorseArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Mob$Type): void
 "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
 "makesPiglinsNeutral"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
 "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
 "getEnchantmentValue"(arg0: $ItemStack$Type): integer
 "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
 "getDefaultTooltipHideFlags"(arg0: $ItemStack$Type): integer
 "canGrindstoneRepair"(arg0: $ItemStack$Type): boolean
 "isNotReplaceableByPickAction"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: integer): boolean
 "shouldCauseBlockBreakReset"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "canWalkOnPowderedSnow"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "createEntity"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $ItemStack$Type): $Entity
 "getAllEnchantments"(arg0: $ItemStack$Type): $Map<($Enchantment), (integer)>
 "isEnderMask"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $EnderMan$Type): boolean
 "canDisableShield"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: $LivingEntity$Type): boolean
 "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
 "getSweepHitBox"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): $AABB
 "canElytraFly"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "onEntitySwing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "getEntityLifespan"(arg0: $ItemStack$Type, arg1: $Level$Type): integer
 "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
 "onDestroyed"(arg0: $ItemEntity$Type, arg1: $DamageSource$Type): void
 "getHighlightTip"(arg0: $ItemStack$Type, arg1: $Component$Type): $Component
 "getDamage"(arg0: $ItemStack$Type): integer
 "getMaxStackSize"(arg0: $ItemStack$Type): integer
 "transferIngredientData"(arg0: $ItemStack$Type, arg1: $IFusionInventory$Type): void
}

export namespace $IModularArmor {
function getArmor(arg0: $LivingEntity$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModularArmor$Type = ($IModularArmor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModularArmor_ = $IModularArmor$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/magic/$EnchantmentReaper" {
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$EnchantmentCategory, $EnchantmentCategory$Type} from "packages/net/minecraft/world/item/enchantment/$EnchantmentCategory"

export class $EnchantmentReaper extends $Enchantment {
 "slots": ($EquipmentSlot)[]
readonly "category": $EnchantmentCategory

constructor()

public "getMaxCost"(arg0: integer): integer
public "getMaxLevel"(): integer
public "getMinCost"(arg0: integer): integer
public "canEnchant"(arg0: $ItemStack$Type): boolean
get "maxLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentReaper$Type = ($EnchantmentReaper);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnchantmentReaper_ = $EnchantmentReaper$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleEntity" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ModuleHost, $ModuleHost$Type} from "packages/com/brandon3055/draconicevolution/api/capability/$ModuleHost"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ConfigProperty, $ConfigProperty$Type} from "packages/com/brandon3055/draconicevolution/api/config/$ConfigProperty"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ModuleData, $ModuleData$Type} from "packages/com/brandon3055/draconicevolution/api/modules/data/$ModuleData"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GuiRender, $GuiRender$Type} from "packages/codechicken/lib/gui/modular/lib/$GuiRender"
import {$ModuleContext, $ModuleContext$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleContext"
import {$ClickType, $ClickType$Type} from "packages/net/minecraft/world/inventory/$ClickType"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$GuiElement, $GuiElement$Type} from "packages/codechicken/lib/gui/modular/elements/$GuiElement"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Module, $Module$Type} from "packages/com/brandon3055/draconicevolution/api/modules/$Module"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$List, $List$Type} from "packages/java/util/$List"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"

export class $ModuleEntity<T extends $ModuleData<(T)>> {

constructor(arg0: $Module$Type<(T)>)

public "toString"(): string
public "getModule"(): $Module<(T)>
public "contains"(arg0: integer, arg1: integer): boolean
public "tick"(arg0: $ModuleContext$Type): void
public "intersects"(arg0: $ModuleEntity$Type<(any)>): boolean
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "getWidth"(): integer
public "getHeight"(): integer
public "addProperty"(arg0: $ConfigProperty$Type): $ConfigProperty
public "onInstalled"(arg0: $ModuleContext$Type): void
public "setGridY"(arg0: integer): void
public "getMaxGridX"(): integer
public "getMaxGridY"(): integer
public "renderModule"(arg0: $GuiElement$Type<(any)>, arg1: $GuiRender$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: double, arg7: double, arg8: boolean, arg9: float): void
public "setGridX"(arg0: integer): void
public "isPosValid"(arg0: integer, arg1: integer): boolean
public "moduleClicked"(arg0: $Player$Type, arg1: double, arg2: double, arg3: integer, arg4: $ClickType$Type): boolean
public "clearCaches"(): void
public "getEntityProperties"(): $Collection<($ConfigProperty)>
public "renderModuleOverlay"(arg0: $GuiElement$Type<(any)>, arg1: $ModuleContext$Type, arg2: $GuiRender$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: double, arg8: double, arg9: float, arg10: integer): boolean
public static "drawBackgroundString"(arg0: $GuiRender$Type, arg1: string, arg2: float, arg3: float, arg4: integer, arg5: integer, arg6: integer, arg7: boolean, arg8: boolean): void
public "clientModuleClicked"(arg0: $GuiElement$Type<(any)>, arg1: $Player$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: double, arg7: double, arg8: integer): boolean
public "sendMessageToServer"(arg0: $Consumer$Type<($MCDataOutput$Type)>): void
public "onRemoved"(arg0: $ModuleContext$Type): void
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type, arg2: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>): void
public "setHost"(arg0: $ModuleHost$Type): void
public "setPos"(arg0: integer, arg1: integer): void
public "getGridX"(): integer
public "getGridY"(): integer
public "addToolTip"(arg0: $List$Type<($Component$Type)>): void
public "writeToItemStack"(arg0: $ItemStack$Type, arg1: $ModuleContext$Type): void
public "readFromItemStack"(arg0: $ItemStack$Type, arg1: $ModuleContext$Type): void
public "addHostHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "checkPos"(arg0: integer, arg1: integer): boolean
public "handleClientMessage"(arg0: $MCDataInput$Type): void
get "module"(): $Module<(T)>
get "width"(): integer
get "height"(): integer
set "gridY"(value: integer)
get "maxGridX"(): integer
get "maxGridY"(): integer
set "gridX"(value: integer)
get "entityProperties"(): $Collection<($ConfigProperty)>
set "host"(value: $ModuleHost$Type)
get "gridX"(): integer
get "gridY"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleEntity$Type<T> = ($ModuleEntity<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleEntity_<T> = $ModuleEntity$Type<(T)>;
}}
declare module "packages/com/brandon3055/draconicevolution/api/config/$IntegerProperty" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ConfigProperty$Type, $ConfigProperty$Type$Type} from "packages/com/brandon3055/draconicevolution/api/config/$ConfigProperty$Type"
import {$ConfigProperty, $ConfigProperty$Type} from "packages/com/brandon3055/draconicevolution/api/config/$ConfigProperty"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$PropertyData, $PropertyData$Type} from "packages/com/brandon3055/draconicevolution/client/gui/modular/itemconfig/$PropertyData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$ConfigProperty$IntegerFormatter, $ConfigProperty$IntegerFormatter$Type} from "packages/com/brandon3055/draconicevolution/api/config/$ConfigProperty$IntegerFormatter"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"

export class $IntegerProperty extends $ConfigProperty {

constructor(arg0: string, arg1: integer)
constructor(arg0: string, arg1: $Component$Type, arg2: integer)

public "min"(arg0: $Supplier$Type<(integer)>): $IntegerProperty
public "min"(arg0: integer): $IntegerProperty
public "max"(arg0: $Supplier$Type<(integer)>): $IntegerProperty
public "max"(arg0: integer): $IntegerProperty
public "getValue"(): integer
public "setValue"(arg0: integer): void
public "getType"(): $ConfigProperty$Type
public "range"(arg0: integer, arg1: integer): $IntegerProperty
public "range"(arg0: $Supplier$Type<(integer)>, arg1: $Supplier$Type<(integer)>): $IntegerProperty
public "loadData"(arg0: $PropertyData$Type, arg1: $ItemStack$Type): void
public "onValueChanged"(arg0: $ItemStack$Type): void
public "getDisplayValue"(): string
public "serializeMCData"(arg0: $MCDataOutput$Type): void
public "deSerializeMCData"(arg0: $MCDataInput$Type): void
public "setFormatter"(arg0: $ConfigProperty$IntegerFormatter$Type): $IntegerProperty
public "getFormatter"(): $ConfigProperty$IntegerFormatter
public "getMax"(): integer
public "getMin"(): integer
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "validateValue"(): void
public "setChangeListener"(arg0: $BiConsumer$Type<($ItemStack$Type), ($IntegerProperty$Type)>): void
public "setChangeListener"(arg0: $Consumer$Type<($ItemStack$Type)>): void
public "setChangeListener"(arg0: $Runnable$Type): void
get "value"(): integer
set "value"(value: integer)
get "type"(): $ConfigProperty$Type
get "displayValue"(): string
set "formatter"(value: $ConfigProperty$IntegerFormatter$Type)
get "formatter"(): $ConfigProperty$IntegerFormatter
set "changeListener"(value: $BiConsumer$Type<($ItemStack$Type), ($IntegerProperty$Type)>)
set "changeListener"(value: $Consumer$Type<($ItemStack$Type)>)
set "changeListener"(value: $Runnable$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntegerProperty$Type = ($IntegerProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntegerProperty_ = $IntegerProperty$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/modules/items/$ModuleItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModuleProvider, $ModuleProvider$Type} from "packages/com/brandon3055/draconicevolution/api/capability/$ModuleProvider"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ModuleData, $ModuleData$Type} from "packages/com/brandon3055/draconicevolution/api/modules/data/$ModuleData"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Module, $Module$Type} from "packages/com/brandon3055/draconicevolution/api/modules/$Module"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModuleItem<P extends $ModuleData<(P)>> extends $Item implements $ModuleProvider<(P)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, arg1: $Supplier$Type<($Module$Type<(any)>)>)
constructor(arg0: $Supplier$Type<($Module$Type<(any)>)>)

public "getModule"(): $Module<(P)>
public static "getModule"(arg0: $ItemStack$Type): $Module<(any)>
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $ICapabilityProvider
get "module"(): $Module<(P)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleItem$Type<P> = ($ModuleItem<(P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleItem_<P> = $ModuleItem$Type<(P)>;
}}
declare module "packages/com/brandon3055/draconicevolution/api/modules/$Module" {
import {$ModuleEntity, $ModuleEntity$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleEntity"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModuleCategory, $ModuleCategory$Type} from "packages/com/brandon3055/draconicevolution/api/modules/$ModuleCategory"
import {$ModuleData, $ModuleData$Type} from "packages/com/brandon3055/draconicevolution/api/modules/data/$ModuleData"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Material, $Material$Type} from "packages/codechicken/lib/gui/modular/sprite/$Material"
import {$ModuleContext, $ModuleContext$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleContext"
import {$InstallResult, $InstallResult$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$InstallResult"
import {$TechLevel, $TechLevel$Type} from "packages/com/brandon3055/brandonscore/api/$TechLevel"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ModuleType, $ModuleType$Type} from "packages/com/brandon3055/draconicevolution/api/modules/$ModuleType"
import {$ModuleProperties, $ModuleProperties$Type} from "packages/com/brandon3055/draconicevolution/api/modules/data/$ModuleProperties"

export interface $Module<T extends $ModuleData<(T)>> {

 "getProperties"(): $ModuleProperties<(T)>
 "getType"(): $ModuleType<(T)>
 "getData"(): T
 "getItem"(): $Item
 "addInformation"(arg0: $List$Type<($Component$Type)>, arg1: $ModuleContext$Type): void
 "getTexture"(): $Material
 "areModulesCompatible"(arg0: $Module$Type<(any)>): $InstallResult
 "doInstallationCheck"(arg0: $Stream$Type<($Module$Type<(any)>)>): $InstallResult
 "createEntity"(): $ModuleEntity<(any)>
 "getCategories"(): $Collection<($ModuleCategory)>
 "maxInstallable"(): integer
 "getModuleTechLevel"(): $TechLevel
}

export namespace $Module {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Module$Type<T> = ($Module<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Module_<T> = $Module$Type<(T)>;
}}
declare module "packages/com/brandon3055/brandonscore/client/particle/$IntParticleType$IntParticleData" {
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$ParticleOptions, $ParticleOptions$Type} from "packages/net/minecraft/core/particles/$ParticleOptions"

export class $IntParticleType$IntParticleData implements $ParticleOptions {

constructor(arg0: $ParticleType$Type<(any)>, ...arg1: (integer)[])

public "get"(): (integer)[]
public "getType"(): $ParticleType<(any)>
public "writeToNetwork"(arg0: $FriendlyByteBuf$Type): void
public "writeToString"(): string
get "type"(): $ParticleType<(any)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntParticleType$IntParticleData$Type = ($IntParticleType$IntParticleData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntParticleType$IntParticleData_ = $IntParticleType$IntParticleData$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/items/equipment/$ModularHoe" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModuleHost, $ModuleHost$Type} from "packages/com/brandon3055/draconicevolution/api/capability/$ModuleHost"
import {$ModuleHostImpl, $ModuleHostImpl$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleHostImpl"
import {$HoeItem, $HoeItem$Type} from "packages/net/minecraft/world/item/$HoeItem"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MultiCapabilityProvider, $MultiCapabilityProvider$Type} from "packages/com/brandon3055/brandonscore/capability/$MultiCapabilityProvider"
import {$TechProperties, $TechProperties$Type} from "packages/com/brandon3055/draconicevolution/init/$TechProperties"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TechLevel, $TechLevel$Type} from "packages/com/brandon3055/brandonscore/api/$TechLevel"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$ModularOPStorage, $ModularOPStorage$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModularOPStorage"
import {$IFusionInventory, $IFusionInventory$Type} from "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionInventory"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$DETier, $DETier$Type} from "packages/com/brandon3055/draconicevolution/items/equipment/$DETier"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$IModularTieredItem, $IModularTieredItem$Type} from "packages/com/brandon3055/draconicevolution/items/equipment/$IModularTieredItem"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$IDraconicMelee, $IDraconicMelee$Type} from "packages/com/brandon3055/draconicevolution/api/$IDraconicMelee"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Pair, $Pair$Type} from "packages/com/mojang/datafixers/util/$Pair"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularHoe extends $HoeItem implements $IModularTieredItem, $IDraconicMelee {
/**
 * 
 * @deprecated
 */
static "TILLABLES": $Map<($Block), ($Pair<($Predicate<($UseOnContext)>), ($Consumer<($UseOnContext)>)>)>
readonly "blocks": $TagKey<($Block)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $DETier$Type, arg1: $TechProperties$Type)

public "consumeItem"(arg0: $Item$Type, arg1: $Inventory$Type): boolean
public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "getBarColor"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getTechLevel"(): $TechLevel
public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
public "canBeHurtBy"(arg0: $DamageSource$Type): boolean
public "getSwingSpeedMultiplier"(): double
public "getDamageMultiplier"(): double
public "createHost"(arg0: $ItemStack$Type): $ModuleHostImpl
public "createOPStorage"(arg0: $ItemStack$Type, arg1: $ModuleHostImpl$Type): $ModularOPStorage
public "getBaseEfficiency"(): float
public "getItemTier"(): $DETier
public "attemptTillOp"(arg0: $UseOnContext$Type): boolean
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $ModuleHostImpl$Type, arg2: $MultiCapabilityProvider$Type): void
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getAttackDamage"(arg0: $ModuleHost$Type, arg1: $ItemStack$Type): double
public "getEnergyStored"(arg0: $ItemStack$Type): long
public "extractEnergy"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: long): long
public "readShareTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
public "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "isEquipped"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: boolean): boolean
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "addModularItemInformation"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "damageBarWidth"(arg0: $ItemStack$Type): integer
public "damageBarColour"(arg0: $ItemStack$Type): integer
public "handleTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $EquipmentSlot$Type, arg3: boolean): void
public "damageBarVisible"(arg0: $ItemStack$Type): boolean
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $MultiCapabilityProvider
public "isRepairable"(arg0: $ItemStack$Type): boolean
public "transferIngredientData"(arg0: $ItemStack$Type, arg1: $IFusionInventory$Type): void
get "techLevel"(): $TechLevel
get "swingSpeedMultiplier"(): double
get "damageMultiplier"(): double
get "baseEfficiency"(): float
get "itemTier"(): $DETier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularHoe$Type = ($ModularHoe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularHoe_ = $ModularHoe$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/modules/data/$DamageModData" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModuleContext, $ModuleContext$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ModuleData, $ModuleData$Type} from "packages/com/brandon3055/draconicevolution/api/modules/data/$ModuleData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IDamageModifier, $IDamageModifier$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$IDamageModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DamageModData extends $Record implements $ModuleData<($DamageModData)> {

constructor(modifier: $IDamageModifier$Type)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "combine"(arg0: $DamageModData$Type): $DamageModData
public "modifier"(): $IDamageModifier
public "addInformation"(arg0: $Map$Type<($Component$Type), ($Component$Type)>, arg1: $ModuleContext$Type, arg2: boolean): void
public static "round"(arg0: double, arg1: double): double
public "addInformation"(arg0: $Map$Type<($Component$Type), ($Component$Type)>, arg1: $ModuleContext$Type): void
public "addHostHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "formatNumber"(arg0: long): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DamageModData$Type = ($DamageModData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DamageModData_ = $DamageModData$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/config/$ConfigProperty$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ConfigProperty$Type extends $Enum<($ConfigProperty$Type)> {
static readonly "BOOLEAN": $ConfigProperty$Type
static readonly "INTEGER": $ConfigProperty$Type
static readonly "DECIMAL": $ConfigProperty$Type
static readonly "ENUM": $ConfigProperty$Type


public static "values"(): ($ConfigProperty$Type)[]
public static "valueOf"(arg0: string): $ConfigProperty$Type
public static "getSafe"(arg0: integer): $ConfigProperty$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigProperty$Type$Type = (("boolean") | ("integer") | ("decimal") | ("enum")) | ($ConfigProperty$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigProperty$Type_ = $ConfigProperty$Type$Type;
}}
declare module "packages/com/brandon3055/brandonscore/lib/$CustomTabHandling" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CustomTabHandling {

}

export namespace $CustomTabHandling {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomTabHandling$Type = ($CustomTabHandling);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CustomTabHandling_ = $CustomTabHandling$Type;
}}
declare module "packages/com/brandon3055/brandonscore/capability/$MultiCapabilityProvider" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$ICapabilitySerializable, $ICapabilitySerializable$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilitySerializable"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"

export class $MultiCapabilityProvider implements $ICapabilitySerializable<($CompoundTag)> {

constructor()
constructor(arg0: $INBTSerializable$Type<($CompoundTag$Type)>, arg1: string, ...arg2: ($Capability$Type<(any)>)[])

public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "addCapability"(arg0: $INBTSerializable$Type<($CompoundTag$Type)>, arg1: string, ...arg2: ($Capability$Type<(any)>)[]): void
public "addUnsavedCap"<T>(arg0: $Capability$Type<(T)>, arg1: T): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiCapabilityProvider$Type = ($MultiCapabilityProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MultiCapabilityProvider_ = $MultiCapabilityProvider$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/modules/lib/$InstallResult" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$InstallResult$InstallResultType, $InstallResult$InstallResultType$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$InstallResult$InstallResultType"
import {$Module, $Module$Type} from "packages/com/brandon3055/draconicevolution/api/modules/$Module"
import {$List, $List$Type} from "packages/java/util/$List"

export class $InstallResult {
readonly "resultType": $InstallResult$InstallResultType
readonly "module": $Module<(any)>
readonly "incompatibleModule": $Module<(any)>
readonly "reason": $List<($Component)>

constructor(arg0: $InstallResult$InstallResultType$Type, arg1: $Module$Type<(any)>, arg2: $Module$Type<(any)>, arg3: $List$Type<($Component$Type)>)
constructor(arg0: $InstallResult$InstallResultType$Type, arg1: $Module$Type<(any)>, arg2: $Module$Type<(any)>, arg3: $Component$Type)

public "getBlockingResult"(arg0: $InstallResult$Type): $InstallResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstallResult$Type = ($InstallResult);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InstallResult_ = $InstallResult$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/capability/$ModuleProvider" {
import {$ModuleData, $ModuleData$Type} from "packages/com/brandon3055/draconicevolution/api/modules/data/$ModuleData"
import {$Module, $Module$Type} from "packages/com/brandon3055/draconicevolution/api/modules/$Module"

export interface $ModuleProvider<P extends $ModuleData<(P)>> {

 "getModule"(): $Module<(P)>

(): $Module<(P)>
}

export namespace $ModuleProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleProvider$Type<P> = ($ModuleProvider<(P)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleProvider_<P> = $ModuleProvider$Type<(P)>;
}}
declare module "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionDataTransfer" {
import {$IFusionInventory, $IFusionInventory$Type} from "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionInventory"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IFusionDataTransfer {

 "transferIngredientData"(arg0: $ItemStack$Type, arg1: $IFusionInventory$Type): void
}

export namespace $IFusionDataTransfer {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFusionDataTransfer$Type = ($IFusionDataTransfer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFusionDataTransfer_ = $IFusionDataTransfer$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/modules/$ModuleCategory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ModuleCategory {
static readonly "ALL": $ModuleCategory
static readonly "ENERGY": $ModuleCategory
static readonly "ARMOR": $ModuleCategory
static readonly "ARMOR_FEET": $ModuleCategory
static readonly "ARMOR_LEGS": $ModuleCategory
static readonly "ARMOR_CHEST": $ModuleCategory
static readonly "ARMOR_HEAD": $ModuleCategory
static readonly "CHESTPIECE": $ModuleCategory
static readonly "MELEE_WEAPON": $ModuleCategory
static readonly "RANGED_WEAPON": $ModuleCategory
static readonly "MINING_TOOL": $ModuleCategory
static readonly "TOOL_AXE": $ModuleCategory
static readonly "TOOL_SHOVEL": $ModuleCategory
static readonly "TOOL_HOE": $ModuleCategory

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleCategory$Type = ($ModuleCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleCategory_ = $ModuleCategory$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/modules/lib/$InstallResult$InstallResultType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $InstallResult$InstallResultType extends $Enum<($InstallResult$InstallResultType)> {
static readonly "YES": $InstallResult$InstallResultType
static readonly "ONLY_WHEN_OVERRIDEN": $InstallResult$InstallResultType
static readonly "OVERRIDE": $InstallResult$InstallResultType
static readonly "NO": $InstallResult$InstallResultType


public static "values"(): ($InstallResult$InstallResultType)[]
public static "valueOf"(arg0: string): $InstallResult$InstallResultType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstallResult$InstallResultType$Type = (("no") | ("only_when_overriden") | ("yes") | ("override")) | ($InstallResult$InstallResultType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InstallResult$InstallResultType_ = $InstallResult$InstallResultType$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/init/$DECreativeTabs$CyclingTab" {
import {$CreativeModeTab, $CreativeModeTab$Type} from "packages/net/minecraft/world/item/$CreativeModeTab"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$CreativeModeTab$Builder, $CreativeModeTab$Builder$Type} from "packages/net/minecraft/world/item/$CreativeModeTab$Builder"

export class $DECreativeTabs$CyclingTab extends $CreativeModeTab {
readonly "tabsBefore": $List<($ResourceLocation)>
readonly "tabsAfter": $List<($ResourceLocation)>

constructor(arg0: $CreativeModeTab$Builder$Type, arg1: $List$Type<($ItemStack$Type)>)

public "getIconItem"(): $ItemStack
get "iconItem"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DECreativeTabs$CyclingTab$Type = ($DECreativeTabs$CyclingTab);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DECreativeTabs$CyclingTab_ = $DECreativeTabs$CyclingTab$Type;
}}
declare module "packages/com/brandon3055/brandonscore/mixin/$EntityAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EntityAccessor {

 "invokeSetSharedFlag"(arg0: integer, arg1: boolean): void

(arg0: integer, arg1: boolean): void
}

export namespace $EntityAccessor {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccessor$Type = ($EntityAccessor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityAccessor_ = $EntityAccessor$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/$IInvCharge" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IInvCharge {

 "canCharge"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: boolean): boolean

(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: boolean): boolean
}

export namespace $IInvCharge {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInvCharge$Type = ($IInvCharge);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IInvCharge_ = $IInvCharge$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/$DraconiumBlock" {
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockBCore, $BlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$BlockBCore"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $DraconiumBlock extends $BlockBCore {
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getEnchantPowerBonus"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraconiumBlock$Type = ($DraconiumBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraconiumBlock_ = $DraconiumBlock$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/$StructureBlock" {
import {$EntityBlockBCore, $EntityBlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$EntityBlockBCore"
import {$StructurePart, $StructurePart$Type} from "packages/com/brandon3055/brandonscore/multiblock/$StructurePart"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$CustomTabHandling, $CustomTabHandling$Type} from "packages/com/brandon3055/brandonscore/lib/$CustomTabHandling"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$RenderHighlightEvent$Block, $RenderHighlightEvent$Block$Type} from "packages/net/minecraftforge/client/event/$RenderHighlightEvent$Block"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $StructureBlock extends $EntityBlockBCore implements $StructurePart, $CustomTabHandling {
static "buildingLock": boolean
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "is"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $TagKey$Type<($Block$Type)>): boolean
public "is"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Block$Type): boolean
public static "getBlock"(arg0: $Level$Type, arg1: $BlockPos$Type): $Block
public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "onNeighborChange"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $BlockPos$Type): void
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
public "renderSelectionBox"(arg0: $RenderHighlightEvent$Block$Type, arg1: $Level$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureBlock$Type = ($StructureBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructureBlock_ = $StructureBlock$Type;
}}
declare module "packages/com/brandon3055/brandonscore/lib/datamanager/$TileDataManager" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IDataManagerProvider, $IDataManagerProvider$Type} from "packages/com/brandon3055/brandonscore/lib/datamanager/$IDataManagerProvider"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/inventory/$ContainerListener"
import {$PacketCustom, $PacketCustom$Type} from "packages/codechicken/lib/packet/$PacketCustom"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IManagedData, $IManagedData$Type} from "packages/com/brandon3055/brandonscore/lib/datamanager/$IManagedData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$IDataManager, $IDataManager$Type} from "packages/com/brandon3055/brandonscore/lib/datamanager/$IDataManager"

export class $TileDataManager<T extends ($BlockEntity) & ($IDataManagerProvider)> implements $IDataManager {
readonly "tile": T

constructor(arg0: T)

public "register"<M extends $IManagedData>(arg0: M): M
public "isClientSide"(): boolean
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "receiveSyncData"(arg0: $MCDataInput$Type): void
public "sendToServer"(arg0: $IManagedData$Type): void
public "readFromStackNBT"(arg0: $CompoundTag$Type): void
public "writeToStackNBT"(arg0: $CompoundTag$Type): void
public "forceSync"(): void
public "forceSync"(arg0: $IManagedData$Type): void
public "detectAndSendChangesToListeners"(arg0: $Collection$Type<($Player$Type)>): void
public "receiveDataFromClient"(arg0: $MCDataInput$Type): void
public "detectAndSendChanges"(): void
public "readSyncNBT"(arg0: $CompoundTag$Type): void
public "writeSyncNBT"(arg0: $CompoundTag$Type): void
public "getDataByName"(arg0: string): $IManagedData
public "createSyncPacket"(): $PacketCustom
public "getDataByIndex"(arg0: integer): $IManagedData
public "forcePlayerSync"(arg0: $ServerPlayer$Type): void
public "markDirty"(): void
public "setMaxSaveInterval"(arg0: integer): void
public "forceContainerSync"(arg0: $List$Type<($ContainerListener$Type)>): void
get "clientSide"(): boolean
set "maxSaveInterval"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileDataManager$Type<T> = ($TileDataManager<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileDataManager_<T> = $TileDataManager$Type<(T)>;
}}
declare module "packages/com/brandon3055/draconicevolution/api/modules/data/$ModuleProperties" {
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModuleContext, $ModuleContext$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleContext"
import {$TechLevel, $TechLevel$Type} from "packages/com/brandon3055/brandonscore/api/$TechLevel"
import {$ModuleData, $ModuleData$Type} from "packages/com/brandon3055/draconicevolution/api/modules/data/$ModuleData"
import {$Module, $Module$Type} from "packages/com/brandon3055/draconicevolution/api/modules/$Module"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModuleType, $ModuleType$Type} from "packages/com/brandon3055/draconicevolution/api/modules/$ModuleType"

export class $ModuleProperties<T extends $ModuleData<(T)>> {

constructor(arg0: $TechLevel$Type, arg1: $Function$Type<($Module$Type<(T)>), (T)>)
constructor(arg0: $TechLevel$Type, arg1: integer, arg2: integer, arg3: $Function$Type<($Module$Type<(T)>), (T)>)

public "getData"(): T
public "getWidth"(): integer
public "getHeight"(): integer
public "loadDefaults"(arg0: $ModuleType$Type<(T)>): void
public "addStats"(arg0: $List$Type<($Component$Type)>, arg1: $Module$Type<(any)>, arg2: $ModuleContext$Type): void
public "getTechLevel"(): $TechLevel
public "reloadData"(arg0: $Module$Type<(T)>): void
get "data"(): T
get "width"(): integer
get "height"(): integer
get "techLevel"(): $TechLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleProperties$Type<T> = ($ModuleProperties<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleProperties_<T> = $ModuleProperties$Type<(T)>;
}}
declare module "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionInventory" {
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$IFusionInjector, $IFusionInjector$Type} from "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionInjector"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$TechLevel, $TechLevel$Type} from "packages/com/brandon3055/brandonscore/api/$TechLevel"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export interface $IFusionInventory extends $Container {

 "stillValid"(arg0: $Player$Type): boolean
 "getContainerSize"(): integer
 "getItem"(arg0: integer): $ItemStack
 "removeItemNoUpdate"(arg0: integer): $ItemStack
 "setChanged"(): void
 "isEmpty"(): boolean
 "clearContent"(): void
 "removeItem"(arg0: integer, arg1: integer): $ItemStack
 "setItem"(arg0: integer, arg1: $ItemStack$Type): void
 "getCatalystStack"(): $ItemStack
 "getInjectors"(): $List<($IFusionInjector)>
 "getOutputStack"(): $ItemStack
 "setCatalystStack"(arg0: $ItemStack$Type): void
 "setOutputStack"(arg0: $ItemStack$Type): void
 "getMinimumTier"(): $TechLevel
 "kjs$self"(): $Container
 "getMaxStackSize"(): integer
 "startOpen"(arg0: $Player$Type): void
 "stopOpen"(arg0: $Player$Type): void
 "getStackInSlot"(slot: integer): $ItemStack
 "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
 "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
 "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
 "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
 "countItem"(arg0: $Item$Type): integer
 "isMutable"(): boolean
 "getSlots"(): integer
 "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "getSlotLimit"(slot: integer): integer
 "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
 "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
 "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
 "asContainer"(): $Container
 "setChanged"(): void
 "getHeight"(): integer
 "clear"(): void
 "getWidth"(): integer
 "getBlock"(level: $Level$Type): $BlockContainerJS
 "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
 "countNonEmpty"(ingredient: $Ingredient$Type): integer
 "countNonEmpty"(): integer
 "getAllItems"(): $List<($ItemStack)>
 "count"(): integer
 "count"(ingredient: $Ingredient$Type): integer
 "find"(ingredient: $Ingredient$Type): integer
 "find"(): integer
 "clear"(ingredient: $Ingredient$Type): void
 "isEmpty"(): boolean
}

export namespace $IFusionInventory {
function stillValidBlockEntity(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
function stillValidBlockEntity(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
function stillValidBlockEntity(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: double): boolean
function tryClear(arg0: any): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFusionInventory$Type = ($IFusionInventory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFusionInventory_ = $IFusionInventory$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/config/$DecimalProperty" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ConfigProperty$Type, $ConfigProperty$Type$Type} from "packages/com/brandon3055/draconicevolution/api/config/$ConfigProperty$Type"
import {$ConfigProperty, $ConfigProperty$Type} from "packages/com/brandon3055/draconicevolution/api/config/$ConfigProperty"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$PropertyData, $PropertyData$Type} from "packages/com/brandon3055/draconicevolution/client/gui/modular/itemconfig/$PropertyData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ConfigProperty$DecimalFormatter, $ConfigProperty$DecimalFormatter$Type} from "packages/com/brandon3055/draconicevolution/api/config/$ConfigProperty$DecimalFormatter"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"

export class $DecimalProperty extends $ConfigProperty {

constructor(arg0: string, arg1: double)
constructor(arg0: string, arg1: $Component$Type, arg2: double)

public "min"(arg0: $Supplier$Type<(double)>): $DecimalProperty
public "min"(arg0: double): $DecimalProperty
public "max"(arg0: $Supplier$Type<(double)>): $DecimalProperty
public "max"(arg0: double): $DecimalProperty
public "getValue"(): double
public "setValue"(arg0: double): void
public "getType"(): $ConfigProperty$Type
public "range"(arg0: double, arg1: double): $DecimalProperty
public "range"(arg0: $Supplier$Type<(double)>, arg1: $Supplier$Type<(double)>): $DecimalProperty
public "loadData"(arg0: $PropertyData$Type, arg1: $ItemStack$Type): void
public "onValueChanged"(arg0: $ItemStack$Type): void
public "getDisplayValue"(): string
public "serializeMCData"(arg0: $MCDataOutput$Type): void
public "deSerializeMCData"(arg0: $MCDataInput$Type): void
public "setFormatter"(arg0: $ConfigProperty$DecimalFormatter$Type): $DecimalProperty
public "getFormatter"(): $ConfigProperty$DecimalFormatter
public "getMax"(): double
public "getMin"(): double
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "validateValue"(): void
public "setChangeListener"(arg0: $BiConsumer$Type<($ItemStack$Type), ($DecimalProperty$Type)>): void
public "setChangeListener"(arg0: $Consumer$Type<($ItemStack$Type)>): void
public "setChangeListener"(arg0: $Runnable$Type): void
get "value"(): double
set "value"(value: double)
get "type"(): $ConfigProperty$Type
get "displayValue"(): string
set "formatter"(value: $ConfigProperty$DecimalFormatter$Type)
get "formatter"(): $ConfigProperty$DecimalFormatter
set "changeListener"(value: $BiConsumer$Type<($ItemStack$Type), ($DecimalProperty$Type)>)
set "changeListener"(value: $Consumer$Type<($ItemStack$Type)>)
set "changeListener"(value: $Runnable$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DecimalProperty$Type = ($DecimalProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DecimalProperty_ = $DecimalProperty$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/modules/items/$EnergyLinkModuleItem" {
import {$ModuleItem, $ModuleItem$Type} from "packages/com/brandon3055/draconicevolution/api/modules/items/$ModuleItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$EnergyLinkData, $EnergyLinkData$Type} from "packages/com/brandon3055/draconicevolution/api/modules/data/$EnergyLinkData"
import {$Module, $Module$Type} from "packages/com/brandon3055/draconicevolution/api/modules/$Module"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $EnergyLinkModuleItem extends $ModuleItem<($EnergyLinkData)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, arg1: $Supplier$Type<($Module$Type<(any)>)>)
constructor(arg0: $Supplier$Type<($Module$Type<(any)>)>)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public static "checkResetLink"(arg0: $ItemStack$Type, arg1: $ServerLevel$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyLinkModuleItem$Type = ($EnergyLinkModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyLinkModuleItem_ = $EnergyLinkModuleItem$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/capability/$ModuleHost" {
import {$ModuleEntity, $ModuleEntity$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleEntity"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModuleCategory, $ModuleCategory$Type} from "packages/com/brandon3055/draconicevolution/api/modules/$ModuleCategory"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ModuleData, $ModuleData$Type} from "packages/com/brandon3055/draconicevolution/api/modules/data/$ModuleData"
import {$ModuleContext, $ModuleContext$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleContext"
import {$InstallResult, $InstallResult$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$InstallResult"
import {$TechLevel, $TechLevel$Type} from "packages/com/brandon3055/brandonscore/api/$TechLevel"
import {$Module, $Module$Type} from "packages/com/brandon3055/draconicevolution/api/modules/$Module"
import {$List, $List$Type} from "packages/java/util/$List"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$ModuleType, $ModuleType$Type} from "packages/com/brandon3055/draconicevolution/api/modules/$ModuleType"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ModuleHost extends $INBTSerializable<($CompoundTag)> {

 "addInformation"(arg0: $Map$Type<($Component$Type), ($Component$Type)>, arg1: $ModuleContext$Type): void
 "getModules"(): $Stream<($Module<(any)>)>
 "addModule"(arg0: $ModuleEntity$Type<(any)>, arg1: $ModuleContext$Type): void
 "isModuleSupported"(arg0: $ModuleEntity$Type<(any)>): boolean
 "getAdditionalTypes"(): $Collection<($ModuleType<(any)>)>
 "getTypeBlackList"(): $Collection<($ModuleType<(any)>)>
 "getDataInformation"<T extends $ModuleData<(T)>>(arg0: T, arg1: $Map$Type<($Component$Type), ($Component$Type)>, arg2: $ModuleContext$Type): void
 "checkRemoveModule"(arg0: $ModuleEntity$Type<(any)>, arg1: $List$Type<($Component$Type)>): boolean
 "getGridHeight"(): integer
 "getHostTechLevel"(): $TechLevel
 "getGridWidth"(): integer
 "getModuleData"<T extends $ModuleData<(T)>>(arg0: $ModuleType$Type<(T)>, arg1: T): T
 "getModuleData"<T extends $ModuleData<(T)>>(arg0: $ModuleType$Type<(T)>): T
 "getModuleCategories"(): $Collection<($ModuleCategory)>
 "handleTick"(arg0: $ModuleContext$Type): void
 "getModuleEntities"(): $List<($ModuleEntity<(any)>)>
 "getInstalledTypes"(): $Stream<($ModuleType<(any)>)>
 "getEntitiesByType"(arg0: $ModuleType$Type<(any)>): $Stream<($ModuleEntity<(any)>)>
 "removeModule"(arg0: $ModuleEntity$Type<(any)>, arg1: $ModuleContext$Type): void
 "serializeNBT"(): $CompoundTag
 "deserializeNBT"(arg0: $CompoundTag$Type): void
}

export namespace $ModuleHost {
function checkAddModule(arg0: $ModuleHost$Type, arg1: $Module$Type<(any)>): $InstallResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleHost$Type = ($ModuleHost);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleHost_ = $ModuleHost$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/$DislocatorPedestal" {
import {$EntityBlockBCore, $EntityBlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$EntityBlockBCore"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $DislocatorPedestal extends $EntityBlockBCore {
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DislocatorPedestal$Type = ($DislocatorPedestal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DislocatorPedestal_ = $DislocatorPedestal$Type;
}}
declare module "packages/com/brandon3055/brandonscore/api/power/$OPStorage$ComparableValue" {
import {$OPStorage, $OPStorage$Type} from "packages/com/brandon3055/brandonscore/api/power/$OPStorage"

export class $OPStorage$ComparableValue {

constructor(arg0: $OPStorage$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OPStorage$ComparableValue$Type = ($OPStorage$ComparableValue);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OPStorage$ComparableValue_ = $OPStorage$ComparableValue$Type;
}}
declare module "packages/com/brandon3055/brandonscore/lib/datamanager/$DataFlags" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $DataFlags {
static "NONE": $DataFlags
static "SAVE_NBT": $DataFlags
static "SAVE_ITEM": $DataFlags
static "SYNC_TILE": $DataFlags
static "SYNC_CONTAINER": $DataFlags
static "TRIGGER_UPDATE": $DataFlags
static "SYNC_ON_SET": $DataFlags
static "CLIENT_CONTROL": $DataFlags
static "SAVE_BOTH": $DataFlags
static "SAVE_NBT_SYNC_TILE": $DataFlags
static "SAVE_NBT_SYNC_CONTAINER": $DataFlags
static "SAVE_BOTH_SYNC_TILE": $DataFlags
static "SAVE_BOTH_SYNC_CONTAINER": $DataFlags
/**
 * 
 * @deprecated
 */
static "DONT_DIRTY": $DataFlags
readonly "saveNBT": boolean
readonly "saveItem": boolean
readonly "syncTile": boolean
readonly "syncContainer": boolean
readonly "triggerUpdate": boolean
readonly "syncOnSet": boolean
readonly "allowClientControl": boolean
readonly "dontMark": boolean


public "syncViaPacket"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataFlags$Type = ($DataFlags);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DataFlags_ = $DataFlags$Type;
}}
declare module "packages/com/brandon3055/brandonscore/lib/$IRSSwitchable$RSMode" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IRSSwitchable$RSMode extends $Enum<($IRSSwitchable$RSMode)> {
static readonly "ALWAYS_ACTIVE": $IRSSwitchable$RSMode
static readonly "ACTIVE_HIGH": $IRSSwitchable$RSMode
static readonly "ACTIVE_LOW": $IRSSwitchable$RSMode
static readonly "NEVER_ACTIVE": $IRSSwitchable$RSMode
 "index": integer


public static "values"(): ($IRSSwitchable$RSMode)[]
public static "valueOf"(arg0: string): $IRSSwitchable$RSMode
public "next"(arg0: boolean): $IRSSwitchable$RSMode
public "canRun"(arg0: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRSSwitchable$RSMode$Type = (("active_low") | ("never_active") | ("active_high") | ("always_active")) | ($IRSSwitchable$RSMode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IRSSwitchable$RSMode_ = $IRSSwitchable$RSMode$Type;
}}
declare module "packages/com/brandon3055/brandonscore/inventory/$InventoryDynamic" {
import {$LinkedList, $LinkedList$Type} from "packages/java/util/$LinkedList"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockContainerJS, $BlockContainerJS$Type} from "packages/dev/latvian/mods/kubejs/level/$BlockContainerJS"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Container, $Container$Type} from "packages/net/minecraft/world/$Container"

export class $InventoryDynamic implements $Container {
 "xp": integer

constructor()

public "removeIf"(arg0: $Predicate$Type<($ItemStack$Type)>): void
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "writeToNBT"(arg0: $CompoundTag$Type): void
public "getStacks"(): $LinkedList<($ItemStack)>
public "setStacks"(arg0: $LinkedList$Type<($ItemStack$Type)>): void
public "getMaxStackSize"(): integer
public "stillValid"(arg0: $Player$Type): boolean
public "startOpen"(arg0: $Player$Type): void
public "stopOpen"(arg0: $Player$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$Type): boolean
public "getContainerSize"(): integer
public "getItem"(arg0: integer): $ItemStack
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "setChanged"(): void
public "isEmpty"(): boolean
public "clearContent"(): void
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "setItem"(arg0: integer, arg1: $ItemStack$Type): void
public "kjs$self"(): $Container
public "getStackInSlot"(slot: integer): $ItemStack
public "canTakeItem"(arg0: $Container$Type, arg1: integer, arg2: $ItemStack$Type): boolean
public "hasAnyOf"(arg0: $Set$Type<($Item$Type)>): boolean
public "hasAnyMatching"(arg0: $Predicate$Type<($ItemStack$Type)>): boolean
public "countItem"(arg0: $Item$Type): integer
public "isMutable"(): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type): boolean
public "getSlots"(): integer
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: integer): boolean
public "insertItem"(slot: integer, stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "getSlotLimit"(slot: integer): integer
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "isItemValid"(slot: integer, stack: $ItemStack$Type): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$Type): void
public "asContainer"(): $Container
public "setChanged"(): void
public "getHeight"(): integer
public "clear"(): void
public "getWidth"(): integer
public "getBlock"(level: $Level$Type): $BlockContainerJS
public static "stillValidBlockEntity"(arg0: $BlockEntity$Type, arg1: $Player$Type, arg2: double): boolean
public static "tryClear"(arg0: any): void
public "insertItem"(stack: $ItemStack$Type, simulate: boolean): $ItemStack
public "countNonEmpty"(ingredient: $Ingredient$Type): integer
public "countNonEmpty"(): integer
public "getAllItems"(): $List<($ItemStack)>
public "count"(): integer
public "count"(ingredient: $Ingredient$Type): integer
public "find"(ingredient: $Ingredient$Type): integer
public "find"(): integer
public "clear"(ingredient: $Ingredient$Type): void
public "isEmpty"(): boolean
get "stacks"(): $LinkedList<($ItemStack)>
set "stacks"(value: $LinkedList$Type<($ItemStack$Type)>)
get "maxStackSize"(): integer
get "containerSize"(): integer
get "empty"(): boolean
get "mutable"(): boolean
get "slots"(): integer
get "height"(): integer
get "width"(): integer
get "allItems"(): $List<($ItemStack)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryDynamic$Type = ($InventoryDynamic);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InventoryDynamic_ = $InventoryDynamic$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/machines/$FlowGate" {
import {$LevelAccessor, $LevelAccessor$Type} from "packages/net/minecraft/world/level/$LevelAccessor"
import {$EntityBlockBCore, $EntityBlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$EntityBlockBCore"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Rotation, $Rotation$Type} from "packages/net/minecraft/world/level/block/$Rotation"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $FlowGate extends $EntityBlockBCore {
static readonly "FACING": $DirectionProperty
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: boolean)

public "rotate"(arg0: $BlockState$Type, arg1: $LevelAccessor$Type, arg2: $BlockPos$Type, arg3: $Rotation$Type): $BlockState
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlowGate$Type = ($FlowGate);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FlowGate_ = $FlowGate$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionRecipe" {
import {$InputReplacement, $InputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$InputReplacement"
import {$IFusionInventory, $IFusionInventory$Type} from "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionInventory"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$RecipeSchema, $RecipeSchema$Type} from "packages/dev/latvian/mods/kubejs/recipe/schema/$RecipeSchema"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$IFusionRecipe$IFusionIngredient, $IFusionRecipe$IFusionIngredient$Type} from "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionRecipe$IFusionIngredient"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"
import {$RegistryAccess, $RegistryAccess$Type} from "packages/net/minecraft/core/$RegistryAccess"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IFusionStateMachine, $IFusionStateMachine$Type} from "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionStateMachine"
import {$TechLevel, $TechLevel$Type} from "packages/com/brandon3055/brandonscore/api/$TechLevel"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ReplacementMatch, $ReplacementMatch$Type} from "packages/dev/latvian/mods/kubejs/recipe/$ReplacementMatch"
import {$OutputReplacement, $OutputReplacement$Type} from "packages/dev/latvian/mods/kubejs/recipe/$OutputReplacement"

export interface $IFusionRecipe extends $Recipe<($IFusionInventory)> {

 "matches"(arg0: $IFusionInventory$Type, arg1: $Level$Type): boolean
 "isSpecial"(): boolean
 "getIngredients"(): $NonNullList<($Ingredient)>
 "getToastSymbol"(): $ItemStack
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
 "fusionIngredients"(): $List<($IFusionRecipe$IFusionIngredient)>
 "getRecipeTier"(): $TechLevel
 "tickFusionState"(arg0: $IFusionStateMachine$Type, arg1: $IFusionInventory$Type, arg2: $Level$Type): void
 "getEnergyCost"(): long
 "getCatalyst"(): $Ingredient
 "canStartCraft"(arg0: $IFusionInventory$Type, arg1: $Level$Type, arg2: $Consumer$Type<($Component$Type)>): boolean
 "getId"(): $ResourceLocation
 "getResultItem"(arg0: $RegistryAccess$Type): $ItemStack
 "assemble"(arg0: $IFusionInventory$Type, arg1: $RegistryAccess$Type): $ItemStack
 "isIncomplete"(): boolean
 "getRemainingItems"(arg0: $IFusionInventory$Type): $NonNullList<($ItemStack)>
 "showNotification"(): boolean
 "getSerializer"(): $RecipeSerializer<(any)>
 "getType"(): $ResourceLocation
 "getMod"(): string
 "getSchema"(): $RecipeSchema
 "getGroup"(): string
 "setGroup"(group: string): void
 "getOrCreateId"(): $ResourceLocation
 "hasOutput"(match: $ReplacementMatch$Type): boolean
 "hasInput"(match: $ReplacementMatch$Type): boolean
 "replaceOutput"(match: $ReplacementMatch$Type, arg1: $OutputReplacement$Type): boolean
 "replaceInput"(match: $ReplacementMatch$Type, arg1: $InputReplacement$Type): boolean
}

export namespace $IFusionRecipe {
function completeCraft(arg0: $IFusionInventory$Type, arg1: $Level$Type, arg2: $IFusionRecipe$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFusionRecipe$Type = ($IFusionRecipe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFusionRecipe_ = $IFusionRecipe$Type;
}}
declare module "packages/com/brandon3055/brandonscore/lib/datamanager/$AbstractManagedData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$IManagedData, $IManagedData$Type} from "packages/com/brandon3055/brandonscore/lib/datamanager/$IManagedData"
import {$IDataManager, $IDataManager$Type} from "packages/com/brandon3055/brandonscore/lib/datamanager/$IDataManager"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$DataFlags, $DataFlags$Type} from "packages/com/brandon3055/brandonscore/lib/datamanager/$DataFlags"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"

export class $AbstractManagedData<T> implements $IManagedData {

constructor(arg0: string, ...arg1: ($DataFlags$Type)[])

public "removeValueListener"(arg0: $Consumer$Type<(T)>): void
public "getName"(): string
public "flags"(): $DataFlags
public "init"(arg0: $IDataManager$Type, arg1: integer): void
public "getIndex"(): integer
public "isDirty"(arg0: boolean): boolean
public "getDataManager"(): $IDataManager
public "setCCSCS"(): void
public "addValueListener"(arg0: $Consumer$Type<(T)>): void
public "addFlags"(...arg0: ($DataFlags$Type)[]): void
public "markDirty"(): void
public "toBytes"(arg0: $MCDataOutput$Type): void
public "validate"(): void
public "fromNBT"(arg0: $CompoundTag$Type): void
public "fromBytes"(arg0: $MCDataInput$Type): void
public "toNBT"(arg0: $CompoundTag$Type): void
get "name"(): string
get "index"(): integer
get "dataManager"(): $IDataManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractManagedData$Type<T> = ($AbstractManagedData<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $AbstractManagedData_<T> = $AbstractManagedData$Type<(T)>;
}}
declare module "packages/com/brandon3055/brandonscore/client/particle/$IntParticleType" {
import {$ParticleType, $ParticleType$Type} from "packages/net/minecraft/core/particles/$ParticleType"
import {$IntParticleType$IntParticleData, $IntParticleType$IntParticleData$Type} from "packages/com/brandon3055/brandonscore/client/particle/$IntParticleType$IntParticleData"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"

export class $IntParticleType extends $ParticleType<($IntParticleType$IntParticleData)> {

constructor(arg0: boolean)

public "codec"(): $Codec<($IntParticleType$IntParticleData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntParticleType$Type = ($IntParticleType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IntParticleType_ = $IntParticleType$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/machines/$EnergyTransfuser" {
import {$EntityBlockBCore, $EntityBlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$EntityBlockBCore"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $EnergyTransfuser extends $EntityBlockBCore {
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyTransfuser$Type = ($EnergyTransfuser);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyTransfuser_ = $EnergyTransfuser$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/machines/$CelestialManipulator" {
import {$EntityBlockBCore, $EntityBlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$EntityBlockBCore"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $CelestialManipulator extends $EntityBlockBCore {
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CelestialManipulator$Type = ($CelestialManipulator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CelestialManipulator_ = $CelestialManipulator$Type;
}}
declare module "packages/com/brandon3055/brandonscore/blocks/$ItemBlockBCore" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$BlockItem, $BlockItem$Type} from "packages/net/minecraft/world/item/$BlockItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemBlockBCore extends $BlockItem {
static readonly "BLOCK_ENTITY_TAG": string
static readonly "BLOCK_STATE_TAG": string
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Block$Type, arg1: $Item$Properties$Type)

public "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBlockBCore$Type = ($ItemBlockBCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBlockBCore_ = $ItemBlockBCore$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/config/$EnumProperty" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ConfigProperty$Type, $ConfigProperty$Type$Type} from "packages/com/brandon3055/draconicevolution/api/config/$ConfigProperty$Type"
import {$ConfigProperty, $ConfigProperty$Type} from "packages/com/brandon3055/draconicevolution/api/config/$ConfigProperty"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$PropertyData, $PropertyData$Type} from "packages/com/brandon3055/draconicevolution/client/gui/modular/itemconfig/$PropertyData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$List, $List$Type} from "packages/java/util/$List"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnumProperty<T extends $Enum<(T)>> extends $ConfigProperty {

constructor(arg0: string, arg1: T)
constructor(arg0: string, arg1: $Component$Type, arg2: T)

public "setValueFormatter"(arg0: $Function$Type<(T), (string)>): void
public "setAllowedValues"(...arg0: (T)[]): $EnumProperty<(T)>
public "setAllowedValues"(arg0: $List$Type<(T)>): $EnumProperty<(T)>
public "generateValueDisplayMap"(): $Map<(integer), (string)>
public "getDisplayFormatter"(): $Function<(T), (string)>
public "getAllowedValues"(): $List<(T)>
public "getValue"(): T
public "setValue"(arg0: T): void
public "getType"(): $ConfigProperty$Type
public "loadData"(arg0: $PropertyData$Type, arg1: $ItemStack$Type): void
public "onValueChanged"(arg0: $ItemStack$Type): void
public "getDisplayValue"(): string
public "serializeMCData"(arg0: $MCDataOutput$Type): void
public "deSerializeMCData"(arg0: $MCDataInput$Type): void
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "validateValue"(): void
public "setChangeListener"(arg0: $Consumer$Type<($ItemStack$Type)>): void
public "setChangeListener"(arg0: $Runnable$Type): void
public "setChangeListener"(arg0: $BiConsumer$Type<($ItemStack$Type), ($EnumProperty$Type<(T)>)>): void
set "valueFormatter"(value: $Function$Type<(T), (string)>)
set "allowedValues"(value: (T)[])
set "allowedValues"(value: $List$Type<(T)>)
get "displayFormatter"(): $Function<(T), (string)>
get "allowedValues"(): $List<(T)>
get "value"(): T
set "value"(value: T)
get "type"(): $ConfigProperty$Type
get "displayValue"(): string
set "changeListener"(value: $Consumer$Type<($ItemStack$Type)>)
set "changeListener"(value: $Runnable$Type)
set "changeListener"(value: $BiConsumer$Type<($ItemStack$Type), ($EnumProperty$Type<(T)>)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumProperty$Type<T> = ($EnumProperty<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnumProperty_<T> = $EnumProperty$Type<(T)>;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/$ParticleGenerator" {
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockBCore, $BlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$BlockBCore"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $ParticleGenerator extends $BlockBCore {
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleGenerator$Type = ($ParticleGenerator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ParticleGenerator_ = $ParticleGenerator$Type;
}}
declare module "packages/com/brandon3055/brandonscore/api/hud/$IHudBlock" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GuiRender, $GuiRender$Type} from "packages/codechicken/lib/gui/modular/lib/$GuiRender"
import {$IHudDisplay, $IHudDisplay$Type} from "packages/com/brandon3055/brandonscore/api/hud/$IHudDisplay"

export interface $IHudBlock extends $IHudDisplay {

 "generateHudText"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $List$Type<($Component$Type)>): void
 "shouldDisplayHudText"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
 "renderHudContent"(arg0: $GuiRender$Type, arg1: double, arg2: double, arg3: $List$Type<($Component$Type)>): void
 "computeHudHeight"(arg0: $Minecraft$Type, arg1: $List$Type<($Component$Type)>): double
 "computeHudWidth"(arg0: $Minecraft$Type, arg1: $List$Type<($Component$Type)>): double
 "renderHudBackground"(arg0: $GuiRender$Type, arg1: double, arg2: double, arg3: $List$Type<($Component$Type)>): void

(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $List$Type<($Component$Type)>): void
}

export namespace $IHudBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHudBlock$Type = ($IHudBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHudBlock_ = $IHudBlock$Type;
}}
declare module "packages/com/brandon3055/brandonscore/api/hud/$IHudDisplay" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$List, $List$Type} from "packages/java/util/$List"
import {$GuiRender, $GuiRender$Type} from "packages/codechicken/lib/gui/modular/lib/$GuiRender"

export interface $IHudDisplay {

 "renderHudContent"(arg0: $GuiRender$Type, arg1: double, arg2: double, arg3: $List$Type<($Component$Type)>): void
 "computeHudHeight"(arg0: $Minecraft$Type, arg1: $List$Type<($Component$Type)>): double
 "computeHudWidth"(arg0: $Minecraft$Type, arg1: $List$Type<($Component$Type)>): double
 "renderHudBackground"(arg0: $GuiRender$Type, arg1: double, arg2: double, arg3: $List$Type<($Component$Type)>): void
}

export namespace $IHudDisplay {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHudDisplay$Type = ($IHudDisplay);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHudDisplay_ = $IHudDisplay$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/machines/$Generator" {
import {$EntityBlockBCore, $EntityBlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$EntityBlockBCore"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $Generator extends $EntityBlockBCore {
static readonly "FACING": $DirectionProperty
static readonly "ACTIVE": $BooleanProperty
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getLightEmission"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Generator$Type = ($Generator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Generator_ = $Generator$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/modules/data/$EnergyData" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModuleContext, $ModuleContext$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ModuleData, $ModuleData$Type} from "packages/com/brandon3055/draconicevolution/api/modules/data/$ModuleData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnergyData extends $Record implements $ModuleData<($EnergyData)> {
static readonly "EMPTY": $EnergyData

constructor(capacity: long, transfer: long)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "combine"(arg0: $EnergyData$Type): $EnergyData
public "capacity"(): long
public "transfer"(): long
public "addInformation"(arg0: $Map$Type<($Component$Type), ($Component$Type)>, arg1: $ModuleContext$Type, arg2: boolean): void
public static "round"(arg0: double, arg1: double): double
public "addInformation"(arg0: $Map$Type<($Component$Type), ($Component$Type)>, arg1: $ModuleContext$Type): void
public "addHostHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "formatNumber"(arg0: long): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyData$Type = ($EnergyData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyData_ = $EnergyData$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionInjector" {
import {$TechLevel, $TechLevel$Type} from "packages/com/brandon3055/brandonscore/api/$TechLevel"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IFusionInjector {

 "validate"(): boolean
 "setEnergyRequirement"(arg0: long, arg1: long): void
 "getEnergyRequirement"(): long
 "setInjectorEnergy"(arg0: long): void
 "getInjectorEnergy"(): long
 "getInjectorStack"(): $ItemStack
 "setInjectorStack"(arg0: $ItemStack$Type): void
 "getInjectorTier"(): $TechLevel
}

export namespace $IFusionInjector {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFusionInjector$Type = ($IFusionInjector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFusionInjector_ = $IFusionInjector$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/modules/data/$EnergyLinkData" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModuleContext, $ModuleContext$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ModuleData, $ModuleData$Type} from "packages/com/brandon3055/draconicevolution/api/modules/data/$ModuleData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnergyLinkData extends $Record implements $ModuleData<($EnergyLinkData)> {

constructor(activationEnergy: long, operationEnergy: long, transferLimit: long, xDimensional: boolean)

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "combine"(arg0: $EnergyLinkData$Type): $EnergyLinkData
public "xDimensional"(): boolean
public "activationEnergy"(): long
public "operationEnergy"(): long
public "transferLimit"(): long
public "addInformation"(arg0: $Map$Type<($Component$Type), ($Component$Type)>, arg1: $ModuleContext$Type): void
public static "round"(arg0: double, arg1: double): double
/**
 * 
 * @deprecated
 */
public "addInformation"(arg0: $Map$Type<($Component$Type), ($Component$Type)>, arg1: $ModuleContext$Type, arg2: boolean): void
public "addHostHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "formatNumber"(arg0: long): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyLinkData$Type = ($EnergyLinkData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyLinkData_ = $EnergyLinkData$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/machines/$Disenchanter" {
import {$EntityBlockBCore, $EntityBlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$EntityBlockBCore"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $Disenchanter extends $EntityBlockBCore {
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Disenchanter$Type = ($Disenchanter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Disenchanter_ = $Disenchanter$Type;
}}
declare module "packages/com/brandon3055/brandonscore/lib/$IValueHashable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IValueHashable<HASH_TYPE> {

 "getValueHash"(): HASH_TYPE
 "checkValueHash"(arg0: any): boolean
}

export namespace $IValueHashable {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IValueHashable$Type<HASH_TYPE> = ($IValueHashable<(HASH_TYPE)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IValueHashable_<HASH_TYPE> = $IValueHashable$Type<(HASH_TYPE)>;
}}
declare module "packages/com/brandon3055/draconicevolution/api/config/$BooleanProperty" {
import {$ConfigProperty$BooleanFormatter, $ConfigProperty$BooleanFormatter$Type} from "packages/com/brandon3055/draconicevolution/api/config/$ConfigProperty$BooleanFormatter"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ConfigProperty$Type, $ConfigProperty$Type$Type} from "packages/com/brandon3055/draconicevolution/api/config/$ConfigProperty$Type"
import {$ConfigProperty, $ConfigProperty$Type} from "packages/com/brandon3055/draconicevolution/api/config/$ConfigProperty"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$PropertyData, $PropertyData$Type} from "packages/com/brandon3055/draconicevolution/client/gui/modular/itemconfig/$PropertyData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"

export class $BooleanProperty extends $ConfigProperty {

constructor(arg0: string, arg1: boolean)
constructor(arg0: string, arg1: $Component$Type, arg2: boolean)

public "getValue"(): boolean
public "setValue"(arg0: boolean): void
public "getType"(): $ConfigProperty$Type
public "loadData"(arg0: $PropertyData$Type, arg1: $ItemStack$Type): void
public "onValueChanged"(arg0: $ItemStack$Type): void
public "getDisplayValue"(): string
public "serializeMCData"(arg0: $MCDataOutput$Type): void
public "deSerializeMCData"(arg0: $MCDataInput$Type): void
public "setValueOverride"(arg0: $Supplier$Type<(boolean)>): void
public "setFormatter"(arg0: $ConfigProperty$BooleanFormatter$Type): $BooleanProperty
public "getFormatter"(): $ConfigProperty$BooleanFormatter
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "validateValue"(): void
public "setChangeListener"(arg0: $Runnable$Type): void
public "setChangeListener"(arg0: $BiConsumer$Type<($ItemStack$Type), ($BooleanProperty$Type)>): void
public "setChangeListener"(arg0: $Consumer$Type<($ItemStack$Type)>): void
get "value"(): boolean
set "value"(value: boolean)
get "type"(): $ConfigProperty$Type
get "displayValue"(): string
set "valueOverride"(value: $Supplier$Type<(boolean)>)
set "formatter"(value: $ConfigProperty$BooleanFormatter$Type)
get "formatter"(): $ConfigProperty$BooleanFormatter
set "changeListener"(value: $Runnable$Type)
set "changeListener"(value: $BiConsumer$Type<($ItemStack$Type), ($BooleanProperty$Type)>)
set "changeListener"(value: $Consumer$Type<($ItemStack$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BooleanProperty$Type = ($BooleanProperty);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BooleanProperty_ = $BooleanProperty$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/client/gui/modular/itemconfig/$PropertyData" {
import {$ConfigProperty$BooleanFormatter, $ConfigProperty$BooleanFormatter$Type} from "packages/com/brandon3055/draconicevolution/api/config/$ConfigProperty$BooleanFormatter"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ConfigProperty$Type, $ConfigProperty$Type$Type} from "packages/com/brandon3055/draconicevolution/api/config/$ConfigProperty$Type"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$ConfigProperty, $ConfigProperty$Type} from "packages/com/brandon3055/draconicevolution/api/config/$ConfigProperty"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$ConfigProperty$IntegerFormatter, $ConfigProperty$IntegerFormatter$Type} from "packages/com/brandon3055/draconicevolution/api/config/$ConfigProperty$IntegerFormatter"
import {$ConfigurableItemMenu, $ConfigurableItemMenu$Type} from "packages/com/brandon3055/draconicevolution/inventory/$ConfigurableItemMenu"
import {$PropertyProvider, $PropertyProvider$Type} from "packages/com/brandon3055/draconicevolution/api/capability/$PropertyProvider"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ConfigProperty$DecimalFormatter, $ConfigProperty$DecimalFormatter$Type} from "packages/com/brandon3055/draconicevolution/api/config/$ConfigProperty$DecimalFormatter"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $PropertyData {
readonly "type": $ConfigProperty$Type
readonly "providerID": $UUID
readonly "providerName": string
 "toolTip": $Component
 "displayName": $Component
 "changeListener": $Runnable
 "isGlobal": boolean
 "isProviderAvailable": boolean
 "integerValue": integer
 "decimalValue": double
 "displayValue": string
 "booleanValue": boolean
 "minValue": double
 "maxValue": double
 "booleanFormatter": $ConfigProperty$BooleanFormatter
 "integerFormatter": $ConfigProperty$IntegerFormatter
 "decimalFormatter": $ConfigProperty$DecimalFormatter
 "enumValueIndex": integer
 "enumValueOptions": $List<(integer)>
 "enumDisplayValues": $Map<(integer), (string)>

constructor(arg0: $UUID$Type, arg1: string, arg2: $ConfigProperty$Type$Type)
constructor(arg0: $PropertyProvider$Type, arg1: $ConfigProperty$Type, arg2: boolean)

public "isPropertyAvailable"(): boolean
public "doesDataMatch"(arg0: $ConfigProperty$Type): boolean
public "pullData"(arg0: $ConfigProperty$Type, arg1: boolean): void
public "pullData"(arg0: $ConfigurableItemMenu$Type, arg1: boolean): void
public "toggleBooleanValue"(): void
public "updateEnumValue"(arg0: integer): void
public "updateNumberValue"(arg0: double, arg1: boolean): void
public "toggleGlobal"(): void
public "updateBooleanValue"(arg0: boolean): void
public "updateDisplayValue"(): void
public "getEnumDisplayName"(arg0: integer): string
public "increment"(arg0: integer): void
public "write"(arg0: $MCDataOutput$Type): void
public static "read"(arg0: $MCDataInput$Type): $PropertyData
public "copy"(): $PropertyData
public "serialize"(): $CompoundTag
public static "deserialize"(arg0: $CompoundTag$Type): $PropertyData
public "onValueChanged"(): void
public "sendToServer"(): void
public "getPropertyName"(): string
public "getPropIfApplicable"(arg0: $PropertyProvider$Type): $ConfigProperty
public "setChangeListener"(arg0: $Runnable$Type): void
get "propertyAvailable"(): boolean
get "propertyName"(): string
set "changeListener"(value: $Runnable$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropertyData$Type = ($PropertyData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PropertyData_ = $PropertyData$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/$Portal" {
import {$EntityBlockBCore, $EntityBlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$EntityBlockBCore"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$CustomTabHandling, $CustomTabHandling$Type} from "packages/com/brandon3055/brandonscore/lib/$CustomTabHandling"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Direction$Axis, $Direction$Axis$Type} from "packages/net/minecraft/core/$Direction$Axis"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Portal extends $EntityBlockBCore implements $CustomTabHandling {
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
static readonly "DRAW_UP": $BooleanProperty
static readonly "DRAW_DOWN": $BooleanProperty
static readonly "DRAW_EAST": $BooleanProperty
static readonly "DRAW_WEST": $BooleanProperty
static readonly "VISIBLE": $BooleanProperty
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public static "getPlacementState"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): $BlockState
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "tick"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): void
public "entityInside"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Portal$Type = ($Portal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Portal_ = $Portal$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionStateMachine$FusionState" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IFusionStateMachine$FusionState extends $Enum<($IFusionStateMachine$FusionState)> {
static readonly "START": $IFusionStateMachine$FusionState
static readonly "CHARGING": $IFusionStateMachine$FusionState
static readonly "CRAFTING": $IFusionStateMachine$FusionState
static readonly "STATE4": $IFusionStateMachine$FusionState
static readonly "STATE5": $IFusionStateMachine$FusionState
static readonly "STATE6": $IFusionStateMachine$FusionState
static readonly "STATE7": $IFusionStateMachine$FusionState
static readonly "STATE8": $IFusionStateMachine$FusionState


public static "values"(): ($IFusionStateMachine$FusionState)[]
public static "valueOf"(arg0: string): $IFusionStateMachine$FusionState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFusionStateMachine$FusionState$Type = (("crafting") | ("start") | ("charging") | ("state6") | ("state5") | ("state8") | ("state7") | ("state4")) | ($IFusionStateMachine$FusionState);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFusionStateMachine$FusionState_ = $IFusionStateMachine$FusionState$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleContext" {
import {$IOPStorage, $IOPStorage$Type} from "packages/com/brandon3055/brandonscore/api/power/$IOPStorage"
import {$ModuleContext$Type, $ModuleContext$Type$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleContext$Type"

export class $ModuleContext {

constructor()

public "getType"(): $ModuleContext$Type
public "getOpStorage"(): $IOPStorage
get "type"(): $ModuleContext$Type
get "opStorage"(): $IOPStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleContext$Type = ($ModuleContext);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleContext_ = $ModuleContext$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/modules/items/$EnergyModuleItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModuleItem, $ModuleItem$Type} from "packages/com/brandon3055/draconicevolution/api/modules/items/$ModuleItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EnergyData, $EnergyData$Type} from "packages/com/brandon3055/draconicevolution/api/modules/data/$EnergyData"
import {$Module, $Module$Type} from "packages/com/brandon3055/draconicevolution/api/modules/$Module"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnergyModuleItem extends $ModuleItem<($EnergyData)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, arg1: $Supplier$Type<($Module$Type<(any)>)>)
constructor(arg0: $Supplier$Type<($Module$Type<(any)>)>)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyModuleItem$Type = ($EnergyModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyModuleItem_ = $EnergyModuleItem$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/machines/$EnergyPylon" {
import {$EntityBlockBCore, $EntityBlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$EntityBlockBCore"
import {$EnergyPylon$Mode, $EnergyPylon$Mode$Type} from "packages/com/brandon3055/draconicevolution/blocks/machines/$EnergyPylon$Mode"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$EnumProperty, $EnumProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$EnumProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $EnergyPylon extends $EntityBlockBCore {
static readonly "MODE": $EnumProperty<($EnergyPylon$Mode)>
static readonly "FACING": $DirectionProperty
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyPylon$Type = ($EnergyPylon);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyPylon_ = $EnergyPylon$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/items/tools/$DislocatorAdvanced$DislocatorTarget" {
import {$TargetPos, $TargetPos$Type} from "packages/com/brandon3055/brandonscore/utils/$TargetPos"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $DislocatorAdvanced$DislocatorTarget extends $TargetPos {

constructor(arg0: double, arg1: double, arg2: double, arg3: $ResourceKey$Type<($Level$Type)>, arg4: float, arg5: float)
constructor()
constructor(arg0: $Entity$Type)
constructor(arg0: $CompoundTag$Type)
constructor(arg0: double, arg1: double, arg2: double, arg3: $ResourceKey$Type<($Level$Type)>)

public "isLocked"(): boolean
public "getName"(): string
public "write"(arg0: $MCDataOutput$Type): void
public "read"(arg0: $MCDataInput$Type): void
public "setName"(arg0: string): $DislocatorAdvanced$DislocatorTarget
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "writeToNBT"(arg0: $CompoundTag$Type): $CompoundTag
public "setLocked"(arg0: boolean): void
get "locked"(): boolean
get "name"(): string
set "name"(value: string)
set "locked"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DislocatorAdvanced$DislocatorTarget$Type = ($DislocatorAdvanced$DislocatorTarget);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DislocatorAdvanced$DislocatorTarget_ = $DislocatorAdvanced$DislocatorTarget$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/config/$ConfigProperty$IntegerFormatter" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ConfigProperty$IntegerFormatter extends $Enum<($ConfigProperty$IntegerFormatter)> {
static readonly "RAW": $ConfigProperty$IntegerFormatter
static readonly "AOE": $ConfigProperty$IntegerFormatter


public static "values"(): ($ConfigProperty$IntegerFormatter)[]
public static "valueOf"(arg0: string): $ConfigProperty$IntegerFormatter
public "format"(arg0: integer): string
public static "getSafe"(arg0: integer): $ConfigProperty$IntegerFormatter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigProperty$IntegerFormatter$Type = (("aoe") | ("raw")) | ($ConfigProperty$IntegerFormatter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigProperty$IntegerFormatter_ = $ConfigProperty$IntegerFormatter$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/items/tools/$DraconiumCapacitor" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModuleHostImpl, $ModuleHostImpl$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleHostImpl"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$IInvCharge, $IInvCharge$Type} from "packages/com/brandon3055/draconicevolution/api/$IInvCharge"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MultiCapabilityProvider, $MultiCapabilityProvider$Type} from "packages/com/brandon3055/brandonscore/capability/$MultiCapabilityProvider"
import {$TechProperties, $TechProperties$Type} from "packages/com/brandon3055/draconicevolution/init/$TechProperties"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IModularItem, $IModularItem$Type} from "packages/com/brandon3055/draconicevolution/items/equipment/$IModularItem"
import {$TechLevel, $TechLevel$Type} from "packages/com/brandon3055/brandonscore/api/$TechLevel"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModularOPStorage, $ModularOPStorage$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModularOPStorage"
import {$IFusionInventory, $IFusionInventory$Type} from "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionInventory"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $DraconiumCapacitor extends $Item implements $IInvCharge, $IModularItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $TechProperties$Type)

public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getEnchantmentValue"(): integer
public "getTechLevel"(): $TechLevel
public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
public "canBeHurtBy"(arg0: $DamageSource$Type): boolean
public "canCharge"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: boolean): boolean
public "createHost"(arg0: $ItemStack$Type): $ModuleHostImpl
public "updateEnergy"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $List$Type<($ItemStack$Type)>): void
public "handleTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $EquipmentSlot$Type, arg3: boolean): void
public "createOPStorage"(arg0: $ItemStack$Type, arg1: $ModuleHostImpl$Type): $ModularOPStorage
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $MultiCapabilityProvider
public "getEnergyStored"(arg0: $ItemStack$Type): long
public "extractEnergy"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: long): long
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "readShareTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
public "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "isEquipped"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: boolean): boolean
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "addModularItemInformation"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "damageBarWidth"(arg0: $ItemStack$Type): integer
public "damageBarColour"(arg0: $ItemStack$Type): integer
public "damageBarVisible"(arg0: $ItemStack$Type): boolean
public "getBaseEfficiency"(): float
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $ModuleHostImpl$Type, arg2: $MultiCapabilityProvider$Type): void
public "transferIngredientData"(arg0: $ItemStack$Type, arg1: $IFusionInventory$Type): void
get "enchantmentValue"(): integer
get "techLevel"(): $TechLevel
get "baseEfficiency"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraconiumCapacitor$Type = ($DraconiumCapacitor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraconiumCapacitor_ = $DraconiumCapacitor$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/modules/items/$EnderCollectionModuleItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModuleItem, $ModuleItem$Type} from "packages/com/brandon3055/draconicevolution/api/modules/items/$ModuleItem"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$NoData, $NoData$Type} from "packages/com/brandon3055/draconicevolution/api/modules/data/$NoData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Module, $Module$Type} from "packages/com/brandon3055/draconicevolution/api/modules/$Module"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $EnderCollectionModuleItem extends $ModuleItem<($NoData)> {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Supplier$Type<($Module$Type<(any)>)>)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderCollectionModuleItem$Type = ($EnderCollectionModuleItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderCollectionModuleItem_ = $EnderCollectionModuleItem$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/$DraconiumOre" {
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$DropExperienceBlock, $DropExperienceBlock$Type} from "packages/net/minecraft/world/level/block/$DropExperienceBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $DraconiumOre extends $DropExperienceBlock {
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getExpDrop"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $RandomSource$Type, arg3: $BlockPos$Type, arg4: integer, arg5: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraconiumOre$Type = ($DraconiumOre);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraconiumOre_ = $DraconiumOre$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleContext$Type" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ModuleContext$Type extends $Enum<($ModuleContext$Type)> {
static readonly "ITEM_STACK": $ModuleContext$Type
static readonly "TILE_ENTITY": $ModuleContext$Type
static readonly "LIMITED": $ModuleContext$Type


public static "values"(): ($ModuleContext$Type)[]
public static "valueOf"(arg0: string): $ModuleContext$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleContext$Type$Type = (("limited") | ("tile_entity") | ("item_stack")) | ($ModuleContext$Type);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleContext$Type_ = $ModuleContext$Type$Type;
}}
declare module "packages/com/brandon3055/brandonscore/inventory/$PlayerSlot" {
import {$PlayerSlot$EnumInvCategory, $PlayerSlot$EnumInvCategory$Type} from "packages/com/brandon3055/brandonscore/inventory/$PlayerSlot$EnumInvCategory"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ByteBuf, $ByteBuf$Type} from "packages/io/netty/buffer/$ByteBuf"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"

export class $PlayerSlot {

constructor(arg0: integer, arg1: $PlayerSlot$EnumInvCategory$Type)
constructor(arg0: $Player$Type, arg1: $InteractionHand$Type)

public static "fromIndexes"(arg0: integer, arg1: integer): $PlayerSlot
public "getCatIndex"(): integer
public "toString"(): string
public static "fromString"(arg0: string): $PlayerSlot
public static "findStack"(arg0: $Inventory$Type, arg1: $Predicate$Type<($ItemStack$Type)>): $PlayerSlot
public static "fromBuff"(arg0: $ByteBuf$Type): $PlayerSlot
public static "fromBuff"(arg0: $MCDataInput$Type): $PlayerSlot
public "toBuff"(arg0: $ByteBuf$Type): void
public "getEquipmentSlot"(): $EquipmentSlot
public "setStackInSlot"(arg0: $Player$Type, arg1: $ItemStack$Type): void
public "getStackInSlot"(arg0: $Player$Type): $ItemStack
public static "findStackActiveFirst"(arg0: $Inventory$Type, arg1: $Predicate$Type<($ItemStack$Type)>): $PlayerSlot
public "getSlotIndex"(): integer
get "catIndex"(): integer
get "equipmentSlot"(): $EquipmentSlot
get "slotIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerSlot$Type = ($PlayerSlot);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerSlot_ = $PlayerSlot$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/machines/$EnergyCoreStabilizer" {
import {$EntityBlockBCore, $EntityBlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$EntityBlockBCore"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $EnergyCoreStabilizer extends $EntityBlockBCore {
static readonly "LARGE": $BooleanProperty
static "SHAPE": $VoxelShape
static "SHAPE_X": $VoxelShape
static "SHAPE_Y": $VoxelShape
static "SHAPE_Z": $VoxelShape
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getLightEmission"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): integer
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getInteractionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyCoreStabilizer$Type = ($EnergyCoreStabilizer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyCoreStabilizer_ = $EnergyCoreStabilizer$Type;
}}
declare module "packages/com/brandon3055/brandonscore/api/$IDataRetainingTile" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"

export interface $IDataRetainingTile {

 "writeToItemStack"(arg0: $CompoundTag$Type, arg1: boolean): void
 "readFromItemStack"(arg0: $CompoundTag$Type): void
 "saveToItem"(): boolean
}

export namespace $IDataRetainingTile {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDataRetainingTile$Type = ($IDataRetainingTile);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDataRetainingTile_ = $IDataRetainingTile$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/machines/$EnergyCore" {
import {$EntityBlockBCore, $EntityBlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$EntityBlockBCore"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $EnergyCore extends $EntityBlockBCore {
static readonly "ACTIVE": $BooleanProperty
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyCore$Type = ($EnergyCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyCore_ = $EnergyCore$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/capability/$PropertyProvider" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$EnumProperty, $EnumProperty$Type} from "packages/com/brandon3055/draconicevolution/api/config/$EnumProperty"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/com/brandon3055/draconicevolution/api/config/$BooleanProperty"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/com/brandon3055/draconicevolution/api/config/$IntegerProperty"
import {$ConfigProperty, $ConfigProperty$Type} from "packages/com/brandon3055/draconicevolution/api/config/$ConfigProperty"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$DecimalProperty, $DecimalProperty$Type} from "packages/com/brandon3055/draconicevolution/api/config/$DecimalProperty"

export interface $PropertyProvider extends $INBTSerializable<($CompoundTag)> {

 "getProperty"(arg0: string): $ConfigProperty
 "getInt"(arg0: string): $IntegerProperty
 "getProperties"(): $Collection<($ConfigProperty)>
 "getProviderName"(): string
 "getEnum"(arg0: string): $EnumProperty<(any)>
 "hasProperty"(arg0: string): boolean
 "getProviderID"(): $UUID
 "hasEnum"(arg0: string): boolean
 "regenProviderID"(): void
 "getDecimal"(arg0: string): $DecimalProperty
 "getBool"(arg0: string): $BooleanProperty
 "hasDecimal"(arg0: string): boolean
 "hasInt"(arg0: string): boolean
 "hasBool"(arg0: string): boolean
 "serializeNBT"(): $CompoundTag
 "deserializeNBT"(arg0: $CompoundTag$Type): void
}

export namespace $PropertyProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PropertyProvider$Type = ($PropertyProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PropertyProvider_ = $PropertyProvider$Type;
}}
declare module "packages/com/brandon3055/brandonscore/lib/datamanager/$IDataManager" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IManagedData, $IManagedData$Type} from "packages/com/brandon3055/brandonscore/lib/datamanager/$IManagedData"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$PacketCustom, $PacketCustom$Type} from "packages/codechicken/lib/packet/$PacketCustom"

export interface $IDataManager {

 "isClientSide"(): boolean
 "readFromNBT"(arg0: $CompoundTag$Type): void
 "writeToNBT"(arg0: $CompoundTag$Type): void
 "receiveSyncData"(arg0: $MCDataInput$Type): void
 "sendToServer"(arg0: $IManagedData$Type): void
 "detectAndSendChanges"(): void
 "getDataByName"(arg0: string): $IManagedData
 "createSyncPacket"(): $PacketCustom
 "getDataByIndex"(arg0: integer): $IManagedData
 "markDirty"(): void
}

export namespace $IDataManager {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDataManager$Type = ($IDataManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDataManager_ = $IDataManager$Type;
}}
declare module "packages/com/brandon3055/brandonscore/api/power/$OPStorage" {
import {$IMCDataSerializable, $IMCDataSerializable$Type} from "packages/com/brandon3055/brandonscore/lib/$IMCDataSerializable"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IOPStorage, $IOPStorage$Type} from "packages/com/brandon3055/brandonscore/api/power/$IOPStorage"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$IOTracker, $IOTracker$Type} from "packages/com/brandon3055/brandonscore/api/power/$IOTracker"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$IOInfo, $IOInfo$Type} from "packages/com/brandon3055/brandonscore/api/power/$IOInfo"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"
import {$IValueHashable, $IValueHashable$Type} from "packages/com/brandon3055/brandonscore/lib/$IValueHashable"
import {$OPStorage$ComparableValue, $OPStorage$ComparableValue$Type} from "packages/com/brandon3055/brandonscore/api/power/$OPStorage$ComparableValue"

export class $OPStorage implements $INBTSerializable<($CompoundTag)>, $IValueHashable<($OPStorage$ComparableValue)>, $IMCDataSerializable, $IOPStorage {

constructor(arg0: $BlockEntity$Type, arg1: long, arg2: long, arg3: long)
constructor(arg0: long, arg1: long, arg2: long)
constructor(arg0: $BlockEntity$Type, arg1: long, arg2: long)
constructor(arg0: long)
constructor(arg0: $BlockEntity$Type, arg1: long)
constructor(arg0: long, arg1: long)

public "setCapacity"(arg0: long): $OPStorage
public "modifyEnergyStored"(arg0: long): long
public "receiveOP"(arg0: long, arg1: boolean): long
public "extractOP"(arg0: long, arg1: boolean): long
public "getIOInfo"(): $IOInfo
public "canReceive"(): boolean
public "maxReceive"(): long
public "maxExtract"(): long
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "setIOTracker"(arg0: $IOTracker$Type): void
public "setMaxTransfer"(arg0: long): $OPStorage
public "getMaxOPStored"(): long
public "getOPStored"(): long
public "canExtract"(): boolean
public "setChangeListener"(arg0: $Runnable$Type): $OPStorage
public "setExtractOnly"(): $OPStorage
public "setMaxReceive"(arg0: long): $OPStorage
public "setMaxExtract"(arg0: long): $OPStorage
public "deSerializeMCD"(arg0: $MCDataInput$Type): void
public "setReceiveOnly"(): $OPStorage
public "serializeMCD"(arg0: $MCDataOutput$Type): void
public "checkValueHash"(arg0: any): boolean
public "markDirty"(): void
public "setIOMode"(arg0: boolean, arg1: boolean): $OPStorage
public "setIOMode"(arg0: boolean): $OPStorage
public "receiveEnergy"(arg0: integer, arg1: boolean): integer
public "getEnergyStored"(): integer
public "getMaxEnergyStored"(): integer
public "extractEnergy"(arg0: integer, arg1: boolean): integer
set "capacity"(value: long)
get "iOInfo"(): $IOInfo
set "iOTracker"(value: $IOTracker$Type)
set "maxTransfer"(value: long)
get "maxOPStored"(): long
get "oPStored"(): long
set "changeListener"(value: $Runnable$Type)
set "iOMode"(value: boolean)
get "energyStored"(): integer
get "maxEnergyStored"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OPStorage$Type = ($OPStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $OPStorage_ = $OPStorage$Type;
}}
declare module "packages/com/brandon3055/brandonscore/inventory/$PlayerSlot$EnumInvCategory" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $PlayerSlot$EnumInvCategory extends $Enum<($PlayerSlot$EnumInvCategory)> {
static readonly "MAIN": $PlayerSlot$EnumInvCategory
static readonly "ARMOR": $PlayerSlot$EnumInvCategory
static readonly "OFF_HAND": $PlayerSlot$EnumInvCategory
static readonly "EQUIPMENT": $PlayerSlot$EnumInvCategory


public static "values"(): ($PlayerSlot$EnumInvCategory)[]
public static "valueOf"(arg0: string): $PlayerSlot$EnumInvCategory
public static "fromIndex"(arg0: integer): $PlayerSlot$EnumInvCategory
public "getIndex"(): integer
get "index"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerSlot$EnumInvCategory$Type = (("armor") | ("off_hand") | ("equipment") | ("main")) | ($PlayerSlot$EnumInvCategory);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlayerSlot$EnumInvCategory_ = $PlayerSlot$EnumInvCategory$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/items/equipment/$ModularAxe" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModuleHost, $ModuleHost$Type} from "packages/com/brandon3055/draconicevolution/api/capability/$ModuleHost"
import {$ModuleHostImpl, $ModuleHostImpl$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleHostImpl"
import {$AxeItem, $AxeItem$Type} from "packages/net/minecraft/world/item/$AxeItem"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$InventoryDynamic, $InventoryDynamic$Type} from "packages/com/brandon3055/brandonscore/inventory/$InventoryDynamic"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MultiCapabilityProvider, $MultiCapabilityProvider$Type} from "packages/com/brandon3055/brandonscore/capability/$MultiCapabilityProvider"
import {$TechProperties, $TechProperties$Type} from "packages/com/brandon3055/draconicevolution/init/$TechProperties"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Pair, $Pair$Type} from "packages/com/brandon3055/brandonscore/lib/$Pair"
import {$IReaperItem, $IReaperItem$Type} from "packages/com/brandon3055/draconicevolution/api/$IReaperItem"
import {$TechLevel, $TechLevel$Type} from "packages/com/brandon3055/brandonscore/api/$TechLevel"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ModularOPStorage, $ModularOPStorage$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModularOPStorage"
import {$IFusionInventory, $IFusionInventory$Type} from "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionInventory"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$DETier, $DETier$Type} from "packages/com/brandon3055/draconicevolution/items/equipment/$DETier"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$IDraconicMelee, $IDraconicMelee$Type} from "packages/com/brandon3055/draconicevolution/api/$IDraconicMelee"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$IModularMiningTool, $IModularMiningTool$Type} from "packages/com/brandon3055/draconicevolution/items/equipment/$IModularMiningTool"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularAxe extends $AxeItem implements $IReaperItem, $IModularMiningTool, $IDraconicMelee {
static "STRIPPABLES": $Map<($Block), ($Block)>
readonly "blocks": $TagKey<($Block)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $DETier$Type, arg1: $TechProperties$Type)

public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "getBarColor"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getTechLevel"(): $TechLevel
public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
public "canBeHurtBy"(arg0: $DamageSource$Type): boolean
public "getSwingSpeedMultiplier"(): double
public "getDamageMultiplier"(): double
public "createHost"(arg0: $ItemStack$Type): $ModuleHostImpl
public "createOPStorage"(arg0: $ItemStack$Type, arg1: $ModuleHostImpl$Type): $ModularOPStorage
public "getBaseEfficiency"(): float
public "getItemTier"(): $DETier
public "getReaperLevel"(arg0: $ItemStack$Type): integer
public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public static "blockStrength"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $Level$Type, arg3: $BlockPos$Type): float
public "breakAOEBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: float, arg5: $InventoryDynamic$Type, arg6: boolean): void
public "breakAOEBlocks"(arg0: $ModuleHost$Type, arg1: $ItemStack$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer, arg5: $Player$Type, arg6: boolean): boolean
public "getMiningArea"(arg0: $BlockPos$Type, arg1: $Player$Type, arg2: integer, arg3: integer): $Pair<($BlockPos), ($BlockPos)>
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getAttackDamage"(arg0: $ModuleHost$Type, arg1: $ItemStack$Type): double
public "getEnergyStored"(arg0: $ItemStack$Type): long
public "extractEnergy"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: long): long
public "readShareTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
public "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "isEquipped"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: boolean): boolean
public "addModularItemInformation"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "damageBarWidth"(arg0: $ItemStack$Type): integer
public "damageBarColour"(arg0: $ItemStack$Type): integer
public "handleTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $EquipmentSlot$Type, arg3: boolean): void
public "damageBarVisible"(arg0: $ItemStack$Type): boolean
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $MultiCapabilityProvider
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $ModuleHostImpl$Type, arg2: $MultiCapabilityProvider$Type): void
public "isRepairable"(arg0: $ItemStack$Type): boolean
public "transferIngredientData"(arg0: $ItemStack$Type, arg1: $IFusionInventory$Type): void
get "techLevel"(): $TechLevel
get "swingSpeedMultiplier"(): double
get "damageMultiplier"(): double
get "baseEfficiency"(): float
get "itemTier"(): $DETier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularAxe$Type = ($ModularAxe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularAxe_ = $ModularAxe$Type;
}}
declare module "packages/com/brandon3055/brandonscore/multiblock/$StructurePart" {
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export interface $StructurePart {

 "is"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $TagKey$Type<($Block$Type)>): boolean
 "is"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Block$Type): boolean
}

export namespace $StructurePart {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructurePart$Type = ($StructurePart);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StructurePart_ = $StructurePart$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/items/$MobSoul" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemBCore, $ItemBCore$Type} from "packages/com/brandon3055/brandonscore/items/$ItemBCore"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $MobSoul extends $ItemBCore {
static "randomDisplayList": $List<(string)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "getName"(arg0: $ItemStack$Type): $Component
public "createEntity"(arg0: $Level$Type, arg1: $ItemStack$Type): $Entity
public "getEntityData"(arg0: $ItemStack$Type): $CompoundTag
public "setEntityData"(arg0: $CompoundTag$Type, arg1: $ItemStack$Type): void
public "getSoulFromEntity"(arg0: $Entity$Type, arg1: boolean): $ItemStack
public "getEntityString"(arg0: $ItemStack$Type): string
public static "getCachedRegName"(arg0: string): $ResourceLocation
public "getRenderEntity"(arg0: string): $Entity
public "getRenderEntity"(arg0: $ItemStack$Type): $Entity
public "setEntity"(arg0: $ResourceLocation$Type, arg1: $ItemStack$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobSoul$Type = ($MobSoul);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $MobSoul_ = $MobSoul$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/modules/data/$ModuleData" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModuleContext, $ModuleContext$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ModuleData<D extends $ModuleData<(D)>> {

 "combine"(arg0: D): D
/**
 * 
 * @deprecated
 */
 "addInformation"(arg0: $Map$Type<($Component$Type), ($Component$Type)>, arg1: $ModuleContext$Type, arg2: boolean): void
 "addInformation"(arg0: $Map$Type<($Component$Type), ($Component$Type)>, arg1: $ModuleContext$Type): void
 "addHostHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void

(arg0: double, arg1: double): double
}

export namespace $ModuleData {
function round(arg0: double, arg1: double): double
function formatNumber(arg0: long): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleData$Type<D> = ($ModuleData<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleData_<D> = $ModuleData$Type<(D)>;
}}
declare module "packages/com/brandon3055/brandonscore/api/power/$IOInfo" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IOInfo {

 "currentOutput"(): long
 "currentInput"(): long
}

export namespace $IOInfo {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOInfo$Type = ($IOInfo);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOInfo_ = $IOInfo$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/items/equipment/$ModularShovel" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModuleHost, $ModuleHost$Type} from "packages/com/brandon3055/draconicevolution/api/capability/$ModuleHost"
import {$ShovelItem, $ShovelItem$Type} from "packages/net/minecraft/world/item/$ShovelItem"
import {$ModuleHostImpl, $ModuleHostImpl$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleHostImpl"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$InventoryDynamic, $InventoryDynamic$Type} from "packages/com/brandon3055/brandonscore/inventory/$InventoryDynamic"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MultiCapabilityProvider, $MultiCapabilityProvider$Type} from "packages/com/brandon3055/brandonscore/capability/$MultiCapabilityProvider"
import {$TechProperties, $TechProperties$Type} from "packages/com/brandon3055/draconicevolution/init/$TechProperties"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Pair, $Pair$Type} from "packages/com/brandon3055/brandonscore/lib/$Pair"
import {$TechLevel, $TechLevel$Type} from "packages/com/brandon3055/brandonscore/api/$TechLevel"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ModularOPStorage, $ModularOPStorage$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModularOPStorage"
import {$IFusionInventory, $IFusionInventory$Type} from "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionInventory"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$DETier, $DETier$Type} from "packages/com/brandon3055/draconicevolution/items/equipment/$DETier"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$IDraconicMelee, $IDraconicMelee$Type} from "packages/com/brandon3055/draconicevolution/api/$IDraconicMelee"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$IModularMiningTool, $IModularMiningTool$Type} from "packages/com/brandon3055/draconicevolution/items/equipment/$IModularMiningTool"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularShovel extends $ShovelItem implements $IModularMiningTool, $IDraconicMelee {
static "FLATTENABLES": $Map<($Block), ($BlockState)>
readonly "blocks": $TagKey<($Block)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $DETier$Type, arg1: $TechProperties$Type)

public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "getBarColor"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getTechLevel"(): $TechLevel
public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
public "canBeHurtBy"(arg0: $DamageSource$Type): boolean
public "getSwingSpeedMultiplier"(): double
public "getDamageMultiplier"(): double
public "createHost"(arg0: $ItemStack$Type): $ModuleHostImpl
public "createOPStorage"(arg0: $ItemStack$Type, arg1: $ModuleHostImpl$Type): $ModularOPStorage
public "getBaseEfficiency"(): float
public "getItemTier"(): $DETier
public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public static "blockStrength"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $Level$Type, arg3: $BlockPos$Type): float
public "breakAOEBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: float, arg5: $InventoryDynamic$Type, arg6: boolean): void
public "breakAOEBlocks"(arg0: $ModuleHost$Type, arg1: $ItemStack$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer, arg5: $Player$Type, arg6: boolean): boolean
public "getMiningArea"(arg0: $BlockPos$Type, arg1: $Player$Type, arg2: integer, arg3: integer): $Pair<($BlockPos), ($BlockPos)>
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getAttackDamage"(arg0: $ModuleHost$Type, arg1: $ItemStack$Type): double
public "getEnergyStored"(arg0: $ItemStack$Type): long
public "extractEnergy"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: long): long
public "readShareTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
public "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "isEquipped"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: boolean): boolean
public "addModularItemInformation"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "damageBarWidth"(arg0: $ItemStack$Type): integer
public "damageBarColour"(arg0: $ItemStack$Type): integer
public "handleTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $EquipmentSlot$Type, arg3: boolean): void
public "damageBarVisible"(arg0: $ItemStack$Type): boolean
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $MultiCapabilityProvider
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $ModuleHostImpl$Type, arg2: $MultiCapabilityProvider$Type): void
public "isRepairable"(arg0: $ItemStack$Type): boolean
public "transferIngredientData"(arg0: $ItemStack$Type, arg1: $IFusionInventory$Type): void
get "techLevel"(): $TechLevel
get "swingSpeedMultiplier"(): double
get "damageMultiplier"(): double
get "baseEfficiency"(): float
get "itemTier"(): $DETier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularShovel$Type = ($ModularShovel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularShovel_ = $ModularShovel$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/integration/equipment/$IDEEquipment" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $IDEEquipment {

 "canEquip"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: string): boolean
 "getTagsTooltip"(arg0: $ItemStack$Type, arg1: $List$Type<($Component$Type)>): $List<($Component)>
 "equipmentTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): void
 "canRightClickEquip"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: string): boolean
}

export namespace $IDEEquipment {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDEEquipment$Type = ($IDEEquipment);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDEEquipment_ = $IDEEquipment$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/items/equipment/$ModularChestpiece" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModuleHostImpl, $ModuleHostImpl$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleHostImpl"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Equipable, $Equipable$Type} from "packages/net/minecraft/world/item/$Equipable"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MultiCapabilityProvider, $MultiCapabilityProvider$Type} from "packages/com/brandon3055/brandonscore/capability/$MultiCapabilityProvider"
import {$IModularArmor, $IModularArmor$Type} from "packages/com/brandon3055/draconicevolution/items/equipment/$IModularArmor"
import {$TechProperties, $TechProperties$Type} from "packages/com/brandon3055/draconicevolution/init/$TechProperties"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$TechLevel, $TechLevel$Type} from "packages/com/brandon3055/brandonscore/api/$TechLevel"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModularOPStorage, $ModularOPStorage$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModularOPStorage"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$EquippedItemModel, $EquippedItemModel$Type} from "packages/com/brandon3055/brandonscore/client/render/$EquippedItemModel"
import {$IFusionInventory, $IFusionInventory$Type} from "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionInventory"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$HumanoidModel, $HumanoidModel$Type} from "packages/net/minecraft/client/model/$HumanoidModel"
import {$IClientItemExtensions, $IClientItemExtensions$Type} from "packages/net/minecraftforge/client/extensions/common/$IClientItemExtensions"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$ArmorItem, $ArmorItem$Type} from "packages/net/minecraft/world/item/$ArmorItem"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$DispenseItemBehavior, $DispenseItemBehavior$Type} from "packages/net/minecraft/core/dispenser/$DispenseItemBehavior"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$EquippedModelItem, $EquippedModelItem$Type} from "packages/com/brandon3055/brandonscore/items/$EquippedModelItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$IDEEquipment, $IDEEquipment$Type} from "packages/com/brandon3055/draconicevolution/integration/equipment/$IDEEquipment"

export class $ModularChestpiece extends $ArmorItem implements $IModularArmor, $IDEEquipment, $EquippedModelItem {
static readonly "DISPENSE_ITEM_BEHAVIOR": $DispenseItemBehavior
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $TechProperties$Type)

public "getExtendedModel"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: $EquipmentSlot$Type, arg3: $HumanoidModel$Type<(any)>, arg4: boolean): $EquippedItemModel
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "canEquip"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: $Entity$Type): boolean
public "canEquip"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: string): boolean
public "getTechLevel"(): $TechLevel
public "initializeClient"(arg0: $Consumer$Type<($IClientItemExtensions$Type)>): void
public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
public "canBeHurtBy"(arg0: $DamageSource$Type): boolean
public "createHost"(arg0: $ItemStack$Type): $ModuleHostImpl
public "createOPStorage"(arg0: $ItemStack$Type, arg1: $ModuleHostImpl$Type): $ModularOPStorage
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $ModuleHostImpl$Type, arg2: $MultiCapabilityProvider$Type): void
public "elytraFlightTickBC"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): boolean
public "canElytraFlyBC"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
public "addModularItemInformation"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "getArmor"(arg0: $LivingEntity$Type): $ItemStack
public "getTagsTooltip"(arg0: $ItemStack$Type, arg1: $List$Type<($Component$Type)>): $List<($Component)>
public "equipmentTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): void
public "canRightClickEquip"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: string): boolean
public "shouldRenderInSlot"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: $EquipmentSlot$Type): boolean
public static "setPartVisibility"(arg0: $HumanoidModel$Type<(any)>, arg1: $EquipmentSlot$Type): void
public "getEnergyStored"(arg0: $ItemStack$Type): long
public "extractEnergy"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: long): long
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "readShareTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
public "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "isEquipped"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: boolean): boolean
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "damageBarWidth"(arg0: $ItemStack$Type): integer
public "damageBarColour"(arg0: $ItemStack$Type): integer
public "handleTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $EquipmentSlot$Type, arg3: boolean): void
public "damageBarVisible"(arg0: $ItemStack$Type): boolean
public "getBaseEfficiency"(): float
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $MultiCapabilityProvider
public static "get"(arg0: $ItemStack$Type): $Equipable
public "transferIngredientData"(arg0: $ItemStack$Type, arg1: $IFusionInventory$Type): void
get "techLevel"(): $TechLevel
get "baseEfficiency"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularChestpiece$Type = ($ModularChestpiece);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularChestpiece_ = $ModularChestpiece$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/init/$TechProperties" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TechLevel, $TechLevel$Type} from "packages/com/brandon3055/brandonscore/api/$TechLevel"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$FeatureFlagSet, $FeatureFlagSet$Type} from "packages/net/minecraft/world/flag/$FeatureFlagSet"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"

export class $TechProperties extends $Item$Properties {
 "maxStackSize": integer
 "maxDamage": integer
 "craftingRemainingItem": $Item
 "rarity": $Rarity
 "foodProperties": $FoodProperties
 "isFireResistant": boolean
 "requiredFeatures": $FeatureFlagSet
 "canRepair": boolean

constructor(arg0: $TechLevel$Type)

public "copy"(): $TechProperties
public "getTechLevel"(): $TechLevel
get "techLevel"(): $TechLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TechProperties$Type = ($TechProperties);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TechProperties_ = $TechProperties$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/items/tools/$BoundDislocator" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Dislocator, $Dislocator$Type} from "packages/com/brandon3055/draconicevolution/items/tools/$Dislocator"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TargetPos, $TargetPos$Type} from "packages/com/brandon3055/brandonscore/utils/$TargetPos"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $BoundDislocator extends $Dislocator {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public static "isValid"(arg0: $ItemStack$Type): boolean
public "getTargetPos"(arg0: $ItemStack$Type, arg1: $Level$Type): $TargetPos
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "getRarity"(arg0: $ItemStack$Type): $Rarity
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
public "hasCustomEntity"(arg0: $ItemStack$Type): boolean
public static "isPlayer"(arg0: $ItemStack$Type): boolean
public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
public "canBeHurtBy"(arg0: $DamageSource$Type): boolean
public static "setPlayerID"(arg0: $ItemStack$Type, arg1: $UUID$Type): void
public static "notifyArriving"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type): void
public static "getPlayerID"(arg0: $ItemStack$Type): $UUID
public static "isP2P"(arg0: $ItemStack$Type): boolean
public static "getLinkId"(arg0: $ItemStack$Type): $UUID
public static "getDislocatorId"(arg0: $ItemStack$Type): $UUID
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoundDislocator$Type = ($BoundDislocator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BoundDislocator_ = $BoundDislocator$Type;
}}
declare module "packages/com/brandon3055/brandonscore/blocks/$SerializationFlags" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"

export class $SerializationFlags<D extends $INBTSerializable<($CompoundTag)>> {

constructor(arg0: string, arg1: D)

public "saveItem"(): $SerializationFlags<(D)>
public "getData"(): D
public "saveTile"(): $SerializationFlags<(D)>
public "syncContainer"(): $SerializationFlags<(D)>
public "saveBoth"(): $SerializationFlags<(D)>
public "syncTile"(): $SerializationFlags<(D)>
get "data"(): D
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SerializationFlags$Type<D> = ($SerializationFlags<(D)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $SerializationFlags_<D> = $SerializationFlags$Type<(D)>;
}}
declare module "packages/com/brandon3055/draconicevolution/inventory/$ConfigurableItemMenu" {
import {$NonNullList, $NonNullList$Type} from "packages/net/minecraft/core/$NonNullList"
import {$SlotGroup, $SlotGroup$Type} from "packages/codechicken/lib/gui/modular/lib/container/$SlotGroup"
import {$ContainerListener, $ContainerListener$Type} from "packages/net/minecraft/world/inventory/$ContainerListener"
import {$PropertyData, $PropertyData$Type} from "packages/com/brandon3055/draconicevolution/client/gui/modular/itemconfig/$PropertyData"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$MenuType, $MenuType$Type} from "packages/net/minecraft/world/inventory/$MenuType"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$ClickType, $ClickType$Type} from "packages/net/minecraft/world/inventory/$ClickType"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$PropertyProvider, $PropertyProvider$Type} from "packages/com/brandon3055/draconicevolution/api/capability/$PropertyProvider"
import {$Pair, $Pair$Type} from "packages/com/brandon3055/brandonscore/lib/$Pair"
import {$ContainerSynchronizer, $ContainerSynchronizer$Type} from "packages/net/minecraft/world/inventory/$ContainerSynchronizer"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$Logger, $Logger$Type} from "packages/org/slf4j/$Logger"
import {$Inventory, $Inventory$Type} from "packages/net/minecraft/world/entity/player/$Inventory"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DataSync, $DataSync$Type} from "packages/codechicken/lib/gui/modular/lib/container/$DataSync"
import {$Slot, $Slot$Type} from "packages/net/minecraft/world/inventory/$Slot"
import {$PlayerSlot, $PlayerSlot$Type} from "packages/com/brandon3055/brandonscore/inventory/$PlayerSlot"
import {$ModularGuiContainerMenu, $ModularGuiContainerMenu$Type} from "packages/codechicken/lib/inventory/container/modular/$ModularGuiContainerMenu"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$IntList, $IntList$Type} from "packages/it/unimi/dsi/fastutil/ints/$IntList"
import {$DataSlot, $DataSlot$Type} from "packages/net/minecraft/world/inventory/$DataSlot"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ConfigurableItemMenu extends $ModularGuiContainerMenu {
readonly "main": $SlotGroup
readonly "hotBar": $SlotGroup
readonly "armor": $SlotGroup
readonly "offhand": $SlotGroup
readonly "curios": $SlotGroup
readonly "inventory": $Inventory
readonly "slotGroups": $List<($SlotGroup)>
readonly "slotGroupMap": $Map<($Slot), ($SlotGroup)>
readonly "zonedSlots": $Map<(integer), ($List<($Slot)>)>
readonly "dataSyncs": $List<($DataSync<(any)>)>
static readonly "LOGGER": $Logger
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_HEADER_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_HEADER_END": integer
static readonly "CARRIED_SLOT_SIZE": integer
readonly "lastSlots": $NonNullList<($ItemStack)>
readonly "slots": $NonNullList<($Slot)>
readonly "dataSlots": $List<($DataSlot)>
 "carried": $ItemStack
readonly "remoteSlots": $NonNullList<($ItemStack)>
readonly "remoteDataSlots": $IntList
 "remoteCarried": $ItemStack
 "stateId": integer
readonly "menuType": $MenuType<(any)>
readonly "containerId": integer
 "quickcraftType": integer
 "quickcraftStatus": integer
readonly "quickcraftSlots": $Set<($Slot)>
readonly "containerListeners": $List<($ContainerListener)>
 "synchronizer": $ContainerSynchronizer
 "suppressRemoteUpdates": boolean

constructor(arg0: integer, arg1: $Inventory$Type, arg2: $FriendlyByteBuf$Type)
constructor(arg0: integer, arg1: $Inventory$Type, arg2: $PlayerSlot$Type)

public static "getProviders"(arg0: $Stream$Type<($ItemStack$Type)>): $Stream<($PropertyProvider)>
public static "getPlayerInventory"(arg0: $Inventory$Type): $Stream<($ItemStack)>
public static "getStackProviders"(arg0: $Stream$Type<($ItemStack$Type)>): $Stream<($Pair<($ItemStack), ($PropertyProvider)>)>
public "getSelectedId"(): $UUID
public "findProvider"(arg0: $UUID$Type): $PropertyProvider
public "getLastStack"(): $ItemStack
public static "tryOpenGui"(arg0: $ServerPlayer$Type): void
public "clicked"(arg0: integer, arg1: integer, arg2: $ClickType$Type, arg3: $Player$Type): void
public "setItem"(arg0: integer, arg1: integer, arg2: $ItemStack$Type): void
public "initializeContents"(arg0: integer, arg1: $List$Type<($ItemStack$Type)>, arg2: $ItemStack$Type): void
public "stillValid"(arg0: $Player$Type): boolean
public "broadcastChanges"(): void
public "setOnInventoryChange"(arg0: $Runnable$Type): void
public "setSelectionListener"(arg0: $Consumer$Type<(boolean)>): void
public static "handlePropertyData"(arg0: $Player$Type, arg1: $PropertyData$Type): void
get "selectedId"(): $UUID
get "lastStack"(): $ItemStack
set "onInventoryChange"(value: $Runnable$Type)
set "selectionListener"(value: $Consumer$Type<(boolean)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurableItemMenu$Type = ($ConfigurableItemMenu);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigurableItemMenu_ = $ConfigurableItemMenu$Type;
}}
declare module "packages/com/brandon3055/brandonscore/api/power/$IOTracker" {
import {$IOInfo, $IOInfo$Type} from "packages/com/brandon3055/brandonscore/api/power/$IOInfo"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"

export class $IOTracker implements $IOInfo, $Runnable {

constructor(arg0: integer)
constructor()

public "run"(): void
public "energyExtracted"(arg0: long): void
public static "averageLongArray"(arg0: (long)[], arg1: integer): long
public "currentOutput"(): long
public "currentInput"(): long
public "syncClientValues"(arg0: long, arg1: long): void
public "energyModified"(arg0: long): void
public "energyInserted"(arg0: long): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOTracker$Type = ($IOTracker);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOTracker_ = $IOTracker$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/$ChaosCrystal" {
import {$EntityBlockBCore, $EntityBlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$EntityBlockBCore"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$CustomTabHandling, $CustomTabHandling$Type} from "packages/com/brandon3055/brandonscore/lib/$CustomTabHandling"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $ChaosCrystal extends $EntityBlockBCore implements $CustomTabHandling {
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "wasExploded"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Explosion$Type): void
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "canEntityDestroy"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChaosCrystal$Type = ($ChaosCrystal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChaosCrystal_ = $ChaosCrystal$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleHostImpl" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModuleHost, $ModuleHost$Type} from "packages/com/brandon3055/draconicevolution/api/capability/$ModuleHost"
import {$ModuleCategory, $ModuleCategory$Type} from "packages/com/brandon3055/draconicevolution/api/modules/$ModuleCategory"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/com/brandon3055/draconicevolution/api/config/$BooleanProperty"
import {$IntegerProperty, $IntegerProperty$Type} from "packages/com/brandon3055/draconicevolution/api/config/$IntegerProperty"
import {$ConfigProperty, $ConfigProperty$Type} from "packages/com/brandon3055/draconicevolution/api/config/$ConfigProperty"
import {$BiFunction, $BiFunction$Type} from "packages/java/util/function/$BiFunction"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$InstallResult, $InstallResult$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$InstallResult"
import {$PropertyProvider, $PropertyProvider$Type} from "packages/com/brandon3055/draconicevolution/api/capability/$PropertyProvider"
import {$TechLevel, $TechLevel$Type} from "packages/com/brandon3055/brandonscore/api/$TechLevel"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Stream, $Stream$Type} from "packages/java/util/stream/$Stream"
import {$DecimalProperty, $DecimalProperty$Type} from "packages/com/brandon3055/draconicevolution/api/config/$DecimalProperty"
import {$ModuleType, $ModuleType$Type} from "packages/com/brandon3055/draconicevolution/api/modules/$ModuleType"
import {$ModuleEntity, $ModuleEntity$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleEntity"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ModuleData, $ModuleData$Type} from "packages/com/brandon3055/draconicevolution/api/modules/data/$ModuleData"
import {$ModuleContext, $ModuleContext$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleContext"
import {$EnumProperty, $EnumProperty$Type} from "packages/com/brandon3055/draconicevolution/api/config/$EnumProperty"
import {$Module, $Module$Type} from "packages/com/brandon3055/draconicevolution/api/modules/$Module"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModuleHostImpl implements $ModuleHost, $PropertyProvider {

constructor(arg0: $TechLevel$Type, arg1: integer, arg2: integer, arg3: string, arg4: boolean, ...arg5: ($ModuleCategory$Type)[])

public "addAdditionalType"(arg0: $ModuleType$Type<(any)>): $ModuleHostImpl
public "setRemoveCheck"(arg0: $BiFunction$Type<($ModuleEntity$Type<(any)>), ($List$Type<($Component$Type)>), (boolean)>): void
public "blackListType"(arg0: $ModuleType$Type<(any)>): $ModuleHostImpl
public "getProperty"(arg0: string): $ConfigProperty
public "getProperties"(): $Collection<($ConfigProperty)>
public "getProviderName"(): string
public "getModules"(): $Stream<($Module<(any)>)>
public "addModule"(arg0: $ModuleEntity$Type<(any)>, arg1: $ModuleContext$Type): void
public "getAdditionalTypes"(): $Collection<($ModuleType<(any)>)>
public "getTypeBlackList"(): $Collection<($ModuleType<(any)>)>
public "checkRemoveModule"(arg0: $ModuleEntity$Type<(any)>, arg1: $List$Type<($Component$Type)>): boolean
public "getProviderID"(): $UUID
public "getGridHeight"(): integer
public "getHostTechLevel"(): $TechLevel
public "regenProviderID"(): void
public "getGridWidth"(): integer
public "serializeNBT"(): $CompoundTag
public "deserializeNBT"(arg0: $CompoundTag$Type): void
public "getModuleData"<T extends $ModuleData<(T)>>(arg0: $ModuleType$Type<(T)>): T
public "getModuleCategories"(): $Collection<($ModuleCategory)>
public "addPropertyBuilder"(arg0: $Consumer$Type<($List$Type<($ConfigProperty$Type)>)>): void
public "handleTick"(arg0: $ModuleContext$Type): void
public "addCategories"(...arg0: ($ModuleCategory$Type)[]): $ModuleHostImpl
public "getModuleEntities"(): $List<($ModuleEntity<(any)>)>
public "transferModules"(arg0: $ModuleHostImpl$Type): void
public "removeModule"(arg0: $ModuleEntity$Type<(any)>, arg1: $ModuleContext$Type): void
public "addInformation"(arg0: $Map$Type<($Component$Type), ($Component$Type)>, arg1: $ModuleContext$Type): void
public "isModuleSupported"(arg0: $ModuleEntity$Type<(any)>): boolean
public "getDataInformation"<T extends $ModuleData<(T)>>(arg0: T, arg1: $Map$Type<($Component$Type), ($Component$Type)>, arg2: $ModuleContext$Type): void
public static "checkAddModule"(arg0: $ModuleHost$Type, arg1: $Module$Type<(any)>): $InstallResult
public "getModuleData"<T extends $ModuleData<(T)>>(arg0: $ModuleType$Type<(T)>, arg1: T): T
public "getInstalledTypes"(): $Stream<($ModuleType<(any)>)>
public "getEntitiesByType"(arg0: $ModuleType$Type<(any)>): $Stream<($ModuleEntity<(any)>)>
public "getInt"(arg0: string): $IntegerProperty
public "getEnum"(arg0: string): $EnumProperty<(any)>
public "hasProperty"(arg0: string): boolean
public "hasEnum"(arg0: string): boolean
public "getDecimal"(arg0: string): $DecimalProperty
public "getBool"(arg0: string): $BooleanProperty
public "hasDecimal"(arg0: string): boolean
public "hasInt"(arg0: string): boolean
public "hasBool"(arg0: string): boolean
set "removeCheck"(value: $BiFunction$Type<($ModuleEntity$Type<(any)>), ($List$Type<($Component$Type)>), (boolean)>)
get "properties"(): $Collection<($ConfigProperty)>
get "providerName"(): string
get "modules"(): $Stream<($Module<(any)>)>
get "additionalTypes"(): $Collection<($ModuleType<(any)>)>
get "typeBlackList"(): $Collection<($ModuleType<(any)>)>
get "providerID"(): $UUID
get "gridHeight"(): integer
get "hostTechLevel"(): $TechLevel
get "gridWidth"(): integer
get "moduleCategories"(): $Collection<($ModuleCategory)>
get "moduleEntities"(): $List<($ModuleEntity<(any)>)>
get "installedTypes"(): $Stream<($ModuleType<(any)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleHostImpl$Type = ($ModuleHostImpl);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleHostImpl_ = $ModuleHostImpl$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/items/equipment/$ModularSword" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModuleHost, $ModuleHost$Type} from "packages/com/brandon3055/draconicevolution/api/capability/$ModuleHost"
import {$ModuleHostImpl, $ModuleHostImpl$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleHostImpl"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MultiCapabilityProvider, $MultiCapabilityProvider$Type} from "packages/com/brandon3055/brandonscore/capability/$MultiCapabilityProvider"
import {$TechProperties, $TechProperties$Type} from "packages/com/brandon3055/draconicevolution/init/$TechProperties"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$IReaperItem, $IReaperItem$Type} from "packages/com/brandon3055/draconicevolution/api/$IReaperItem"
import {$TechLevel, $TechLevel$Type} from "packages/com/brandon3055/brandonscore/api/$TechLevel"
import {$List, $List$Type} from "packages/java/util/$List"
import {$SwordItem, $SwordItem$Type} from "packages/net/minecraft/world/item/$SwordItem"
import {$ModularOPStorage, $ModularOPStorage$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModularOPStorage"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IFusionInventory, $IFusionInventory$Type} from "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionInventory"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$IModularMelee, $IModularMelee$Type} from "packages/com/brandon3055/draconicevolution/items/equipment/$IModularMelee"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$DETier, $DETier$Type} from "packages/com/brandon3055/draconicevolution/items/equipment/$DETier"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularSword extends $SwordItem implements $IReaperItem, $IModularMelee {
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $DETier$Type, arg1: $TechProperties$Type)

public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getTechLevel"(): $TechLevel
public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
public "canBeHurtBy"(arg0: $DamageSource$Type): boolean
public "getSwingSpeedMultiplier"(): double
public "getDamageMultiplier"(): double
public "createHost"(arg0: $ItemStack$Type): $ModuleHostImpl
public "createOPStorage"(arg0: $ItemStack$Type, arg1: $ModuleHostImpl$Type): $ModularOPStorage
public "getItemTier"(): $DETier
public "getReaperLevel"(arg0: $ItemStack$Type): integer
public "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
public "dealAOEDamage"(arg0: $Player$Type, arg1: $Entity$Type, arg2: $ItemStack$Type, arg3: long, arg4: float, arg5: double): void
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getAttackDamage"(arg0: $ModuleHost$Type, arg1: $ItemStack$Type): double
public "getEnergyStored"(arg0: $ItemStack$Type): long
public "extractEnergy"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: long): long
public "readShareTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
public "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "isEquipped"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: boolean): boolean
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "addModularItemInformation"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "damageBarWidth"(arg0: $ItemStack$Type): integer
public "damageBarColour"(arg0: $ItemStack$Type): integer
public "handleTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $EquipmentSlot$Type, arg3: boolean): void
public "damageBarVisible"(arg0: $ItemStack$Type): boolean
public "getBaseEfficiency"(): float
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $MultiCapabilityProvider
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $ModuleHostImpl$Type, arg2: $MultiCapabilityProvider$Type): void
public "transferIngredientData"(arg0: $ItemStack$Type, arg1: $IFusionInventory$Type): void
get "techLevel"(): $TechLevel
get "swingSpeedMultiplier"(): double
get "damageMultiplier"(): double
get "itemTier"(): $DETier
get "baseEfficiency"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularSword$Type = ($ModularSword);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularSword_ = $ModularSword$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/world/$EnderCometFeature" {
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $EnderCometFeature extends $Feature<($NoneFeatureConfiguration)> {
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>

constructor(arg0: $Codec$Type<($NoneFeatureConfiguration$Type)>)

public "place"(arg0: $FeaturePlaceContext$Type<($NoneFeatureConfiguration$Type)>): boolean
public static "getDistance"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): double
public static "generateTrailSphere"(arg0: $Level$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: $RandomSource$Type): void
public static "buildComet"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderCometFeature$Type = ($EnderCometFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnderCometFeature_ = $EnderCometFeature$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/modules/lib/$IDamageModifier" {
import {$SoundEvent, $SoundEvent$Type} from "packages/net/minecraft/sounds/$SoundEvent"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModuleContext, $ModuleContext$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleContext"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$IDamageModifier$EffectType, $IDamageModifier$EffectType$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$IDamageModifier$EffectType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$Vec3, $Vec3$Type} from "packages/net/minecraft/world/phys/$Vec3"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IDamageModifier {

 "getType"(): $IDamageModifier$EffectType
 "addInformation"(arg0: $Map$Type<($Component$Type), ($Component$Type)>, arg1: $ModuleContext$Type, arg2: boolean): void
 "doDamageAndEffects"(arg0: $Level$Type, arg1: $Vec3$Type, arg2: $HitResult$Type, arg3: $LivingEntity$Type, arg4: float, arg5: float, arg6: boolean): void
 "chargeSoundPitch"(arg0: float): float
 "chargeSoundVolume"(arg0: float): float
 "fireSound"(): $SoundEvent
 "chargeSound"(): $SoundEvent
 "effectColour"(): integer
}

export namespace $IDamageModifier {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDamageModifier$Type = ($IDamageModifier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDamageModifier_ = $IDamageModifier$Type;
}}
declare module "packages/com/brandon3055/brandonscore/api/power/$IOPStorage" {
import {$IOInfo, $IOInfo$Type} from "packages/com/brandon3055/brandonscore/api/power/$IOInfo"
import {$IEnergyStorage, $IEnergyStorage$Type} from "packages/net/minecraftforge/energy/$IEnergyStorage"

export interface $IOPStorage extends $IEnergyStorage {

 "modifyEnergyStored"(arg0: long): long
 "receiveOP"(arg0: long, arg1: boolean): long
 "extractOP"(arg0: long, arg1: boolean): long
 "getIOInfo"(): $IOInfo
 "receiveEnergy"(arg0: integer, arg1: boolean): integer
 "getEnergyStored"(): integer
 "getMaxEnergyStored"(): integer
 "canReceive"(): boolean
 "maxReceive"(): long
 "maxExtract"(): long
 "extractEnergy"(arg0: integer, arg1: boolean): integer
 "getMaxOPStored"(): long
 "getOPStored"(): long
 "canExtract"(): boolean
}

export namespace $IOPStorage {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOPStorage$Type = ($IOPStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IOPStorage_ = $IOPStorage$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/items/equipment/$DETier" {
import {$TechLevel, $TechLevel$Type} from "packages/com/brandon3055/brandonscore/api/$TechLevel"
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"

export class $DETier implements $Tier {

constructor(arg0: $TechLevel$Type)

public "getUses"(): integer
public "getSpeed"(): float
public "getAttackDamageBonus"(): float
/**
 * 
 * @deprecated
 */
public "getLevel"(): integer
public "getEnchantmentValue"(): integer
public "getRepairIngredient"(): $Ingredient
public static "getEnchantability"(arg0: $TechLevel$Type): integer
public "getAttackSpeed"(): float
public "getTag"(): $TagKey<($Block)>
get "uses"(): integer
get "speed"(): float
get "attackDamageBonus"(): float
get "level"(): integer
get "enchantmentValue"(): integer
get "repairIngredient"(): $Ingredient
get "attackSpeed"(): float
get "tag"(): $TagKey<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DETier$Type = ($DETier);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DETier_ = $DETier$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/energynet/$EnergyCrystal" {
import {$EntityBlockBCore, $EntityBlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$EntityBlockBCore"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$IHudBlock, $IHudBlock$Type} from "packages/com/brandon3055/brandonscore/api/hud/$IHudBlock"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$GuiRender, $GuiRender$Type} from "packages/codechicken/lib/gui/modular/lib/$GuiRender"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$EnergyCrystal$CrystalType, $EnergyCrystal$CrystalType$Type} from "packages/com/brandon3055/draconicevolution/blocks/energynet/$EnergyCrystal$CrystalType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$TechLevel, $TechLevel$Type} from "packages/com/brandon3055/brandonscore/api/$TechLevel"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $EnergyCrystal extends $EntityBlockBCore implements $IHudBlock {
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: $TechLevel$Type, arg2: $EnergyCrystal$CrystalType$Type)

public "generateHudText"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type, arg3: $List$Type<($Component$Type)>): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "shouldDisplayHudText"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public "renderHudContent"(arg0: $GuiRender$Type, arg1: double, arg2: double, arg3: $List$Type<($Component$Type)>): void
public "computeHudHeight"(arg0: $Minecraft$Type, arg1: $List$Type<($Component$Type)>): double
public "computeHudWidth"(arg0: $Minecraft$Type, arg1: $List$Type<($Component$Type)>): double
public "renderHudBackground"(arg0: $GuiRender$Type, arg1: double, arg2: double, arg3: $List$Type<($Component$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyCrystal$Type = ($EnergyCrystal);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyCrystal_ = $EnergyCrystal$Type;
}}
declare module "packages/com/brandon3055/brandonscore/blocks/$TileCapabilityManager" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$TileBCore, $TileBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$TileBCore"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$ICapabilityProvider, $ICapabilityProvider$Type} from "packages/net/minecraftforge/common/capabilities/$ICapabilityProvider"
import {$SerializationFlags, $SerializationFlags$Type} from "packages/com/brandon3055/brandonscore/blocks/$SerializationFlags"

export class $TileCapabilityManager implements $ICapabilityProvider {

constructor(arg0: $TileBCore$Type)

public "remove"<T>(arg0: $Capability$Type<(T)>, ...arg1: ($Direction$Type)[]): void
public "set"<T>(arg0: $Capability$Type<(any)>, arg1: T, ...arg2: ($Direction$Type)[]): void
public "invalidate"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "serialize"(arg0: boolean): $CompoundTag
public "deserialize"(arg0: $CompoundTag$Type): void
public "setSide"<T>(arg0: $Capability$Type<(any)>, arg1: T, arg2: $Direction$Type): void
public "receiveCapSyncData"(arg0: $MCDataInput$Type): void
public "setInternalManaged"<T extends $INBTSerializable<($CompoundTag)>>(arg0: string, arg1: $Capability$Type<(any)>, arg2: T): $SerializationFlags<(T)>
public "detectAndSendChangesToListeners"(arg0: $Collection$Type<($Player$Type)>): void
public "setCapSideValidator"(arg0: any, arg1: $Predicate$Type<($Direction$Type)>): void
public "detectAndSendChanges"(): void
public "setManaged"<T extends $INBTSerializable<($CompoundTag)>>(arg0: string, arg1: $Capability$Type<(any)>, arg2: T, ...arg3: ($Direction$Type)[]): $SerializationFlags<(T)>
public "clearSide"<T>(arg0: $Capability$Type<(any)>, arg1: $Direction$Type): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>): $LazyOptional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileCapabilityManager$Type = ($TileCapabilityManager);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileCapabilityManager_ = $TileCapabilityManager$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/items/tools/$DislocatorAdvanced" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Dislocator, $Dislocator$Type} from "packages/com/brandon3055/draconicevolution/items/tools/$Dislocator"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DislocatorAdvanced$DislocatorTarget, $DislocatorAdvanced$DislocatorTarget$Type} from "packages/com/brandon3055/draconicevolution/items/tools/$DislocatorAdvanced$DislocatorTarget"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $DislocatorAdvanced extends $Dislocator {
static readonly "MSG_ID1": $UUID
static readonly "MSG_ID2": $UUID
static readonly "MSG_ID3": $UUID
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "generateHudText"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
public "getTargetPos"(arg0: $ItemStack$Type, arg1: $Level$Type): $DislocatorAdvanced$DislocatorTarget
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
public "getFuel"(arg0: $ItemStack$Type): integer
public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
public "canBeHurtBy"(arg0: $DamageSource$Type): boolean
public "useFuel"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
public "getBlinkMode"(arg0: $ItemStack$Type): boolean
public "addFuel"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: boolean, arg3: boolean): void
public "setTargetList"(arg0: $ItemStack$Type, arg1: $List$Type<($DislocatorAdvanced$DislocatorTarget$Type)>): void
public "setFuel"(arg0: $ItemStack$Type, arg1: integer): void
public "handleClientAction"(arg0: $ServerPlayer$Type, arg1: $ItemStack$Type, arg2: $MCDataInput$Type): void
public "getTargetList"(arg0: $ItemStack$Type): $List<($DislocatorAdvanced$DislocatorTarget)>
public static "findDislocator"(arg0: $Player$Type): $ItemStack
public "getSelectedIndex"(arg0: $ItemStack$Type): integer
public "setBlinkMode"(arg0: $ItemStack$Type, arg1: boolean): void
public "setSelectedIndex"(arg0: $ItemStack$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DislocatorAdvanced$Type = ($DislocatorAdvanced);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DislocatorAdvanced_ = $DislocatorAdvanced$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/machines/$EnergyPylon$Mode" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"

export class $EnergyPylon$Mode extends $Enum<($EnergyPylon$Mode)> implements $StringRepresentable {
static readonly "OUTPUT": $EnergyPylon$Mode
static readonly "INPUT": $EnergyPylon$Mode


public static "values"(): ($EnergyPylon$Mode)[]
public static "valueOf"(arg0: string): $EnergyPylon$Mode
public "reverse"(): $EnergyPylon$Mode
public "canReceive"(): boolean
public "getSerializedName"(): string
public "canExtract"(): boolean
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyPylon$Mode$Type = (("output") | ("input")) | ($EnergyPylon$Mode);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyPylon$Mode_ = $EnergyPylon$Mode$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/$Potentiometer" {
import {$EntityBlockBCore, $EntityBlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$EntityBlockBCore"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $Potentiometer extends $EntityBlockBCore {
static readonly "FACING": $DirectionProperty
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "canSurvive"(arg0: $BlockState$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Potentiometer$Type = ($Potentiometer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Potentiometer_ = $Potentiometer$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionStateMachine" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IFusionStateMachine$FusionState, $IFusionStateMachine$FusionState$Type} from "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionStateMachine$FusionState"

export interface $IFusionStateMachine {

 "getCounter"(): integer
 "setCounter"(arg0: integer): void
 "getFusionState"(): $IFusionStateMachine$FusionState
 "cancelCraft"(): void
 "setFusionState"(arg0: $IFusionStateMachine$FusionState$Type): void
 "completeCraft"(): void
 "setFusionStatus"(arg0: double, arg1: $Component$Type): void
 "setCraftAnimation"(arg0: float, arg1: integer): void
}

export namespace $IFusionStateMachine {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFusionStateMachine$Type = ($IFusionStateMachine);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFusionStateMachine_ = $IFusionStateMachine$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/items/equipment/$ModularBow" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModuleHostImpl, $ModuleHostImpl$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleHostImpl"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MultiCapabilityProvider, $MultiCapabilityProvider$Type} from "packages/com/brandon3055/brandonscore/capability/$MultiCapabilityProvider"
import {$TechProperties, $TechProperties$Type} from "packages/com/brandon3055/draconicevolution/init/$TechProperties"
import {$BowItem, $BowItem$Type} from "packages/net/minecraft/world/item/$BowItem"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$AbstractArrow, $AbstractArrow$Type} from "packages/net/minecraft/world/entity/projectile/$AbstractArrow"
import {$IModularItem, $IModularItem$Type} from "packages/com/brandon3055/draconicevolution/items/equipment/$IModularItem"
import {$IReaperItem, $IReaperItem$Type} from "packages/com/brandon3055/draconicevolution/api/$IReaperItem"
import {$TechLevel, $TechLevel$Type} from "packages/com/brandon3055/brandonscore/api/$TechLevel"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ModularOPStorage, $ModularOPStorage$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModularOPStorage"
import {$IFusionInventory, $IFusionInventory$Type} from "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionInventory"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Predicate, $Predicate$Type} from "packages/java/util/function/$Predicate"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularBow extends $BowItem implements $IReaperItem, $IModularItem {
static readonly "MAX_DRAW_DURATION": integer
static readonly "DEFAULT_RANGE": integer
static readonly "ARROW_ONLY": $Predicate<($ItemStack)>
static readonly "ARROW_OR_FIREWORK": $Predicate<($ItemStack)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $TechProperties$Type)

public "onUseTick"(arg0: $Level$Type, arg1: $LivingEntity$Type, arg2: $ItemStack$Type, arg3: integer): void
public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getBarColor"(arg0: $ItemStack$Type): integer
public "releaseUsing"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $LivingEntity$Type, arg3: integer): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getTechLevel"(): $TechLevel
public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
public "canBeHurtBy"(arg0: $DamageSource$Type): boolean
public static "calculateShotEnergy"(arg0: $ItemStack$Type): long
public "addModularItemInformation"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "customArrow"(arg0: $AbstractArrow$Type): $AbstractArrow
public "createHost"(arg0: $ItemStack$Type): $ModuleHostImpl
public "createOPStorage"(arg0: $ItemStack$Type, arg1: $ModuleHostImpl$Type): $ModularOPStorage
public "getReaperLevel"(arg0: $ItemStack$Type): integer
public static "calculateDamage"(arg0: $ItemStack$Type): float
public static "getPowerForTime"(arg0: integer, arg1: $ItemStack$Type): float
public static "getChargeTicks"(arg0: $ItemStack$Type): integer
public "getEnergyStored"(arg0: $ItemStack$Type): long
public "extractEnergy"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: long): long
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "readShareTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
public "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "isEquipped"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: boolean): boolean
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "damageBarWidth"(arg0: $ItemStack$Type): integer
public "damageBarColour"(arg0: $ItemStack$Type): integer
public "handleTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $EquipmentSlot$Type, arg3: boolean): void
public "damageBarVisible"(arg0: $ItemStack$Type): boolean
public "getBaseEfficiency"(): float
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $MultiCapabilityProvider
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $ModuleHostImpl$Type, arg2: $MultiCapabilityProvider$Type): void
public "isRepairable"(arg0: $ItemStack$Type): boolean
public "transferIngredientData"(arg0: $ItemStack$Type, arg1: $IFusionInventory$Type): void
get "techLevel"(): $TechLevel
get "baseEfficiency"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularBow$Type = ($ModularBow);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularBow_ = $ModularBow$Type;
}}
declare module "packages/com/brandon3055/brandonscore/api/hud/$IHudItem" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$GuiRender, $GuiRender$Type} from "packages/codechicken/lib/gui/modular/lib/$GuiRender"
import {$IHudDisplay, $IHudDisplay$Type} from "packages/com/brandon3055/brandonscore/api/hud/$IHudDisplay"

export interface $IHudItem extends $IHudDisplay {

 "generateHudText"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
 "shouldDisplayHudText"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
 "renderHudContent"(arg0: $GuiRender$Type, arg1: double, arg2: double, arg3: $List$Type<($Component$Type)>): void
 "computeHudHeight"(arg0: $Minecraft$Type, arg1: $List$Type<($Component$Type)>): double
 "computeHudWidth"(arg0: $Minecraft$Type, arg1: $List$Type<($Component$Type)>): double
 "renderHudBackground"(arg0: $GuiRender$Type, arg1: double, arg2: double, arg3: $List$Type<($Component$Type)>): void

(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
}

export namespace $IHudItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHudItem$Type = ($IHudItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IHudItem_ = $IHudItem$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/items/equipment/$IModularMiningTool" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ModuleHost, $ModuleHost$Type} from "packages/com/brandon3055/draconicevolution/api/capability/$ModuleHost"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModuleHostImpl, $ModuleHostImpl$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleHostImpl"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$InventoryDynamic, $InventoryDynamic$Type} from "packages/com/brandon3055/brandonscore/inventory/$InventoryDynamic"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$MultiCapabilityProvider, $MultiCapabilityProvider$Type} from "packages/com/brandon3055/brandonscore/capability/$MultiCapabilityProvider"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$Pair, $Pair$Type} from "packages/com/brandon3055/brandonscore/lib/$Pair"
import {$TechLevel, $TechLevel$Type} from "packages/com/brandon3055/brandonscore/api/$TechLevel"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$ModularOPStorage, $ModularOPStorage$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModularOPStorage"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IFusionInventory, $IFusionInventory$Type} from "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionInventory"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$Random, $Random$Type} from "packages/java/util/$Random"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$DETier, $DETier$Type} from "packages/com/brandon3055/draconicevolution/items/equipment/$DETier"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$IModularTieredItem, $IModularTieredItem$Type} from "packages/com/brandon3055/draconicevolution/items/equipment/$IModularTieredItem"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IModularMiningTool extends $IModularTieredItem {

 "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
 "breakAOEBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: float, arg5: $InventoryDynamic$Type, arg6: boolean): void
 "breakAOEBlocks"(arg0: $ModuleHost$Type, arg1: $ItemStack$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer, arg5: $Player$Type, arg6: boolean): boolean
 "getMiningArea"(arg0: $BlockPos$Type, arg1: $Player$Type, arg2: integer, arg3: integer): $Pair<($BlockPos), ($BlockPos)>
 "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
 "getSwingSpeedMultiplier"(): double
 "getDamageMultiplier"(): double
 "getAttackDamage"(arg0: $ModuleHost$Type, arg1: $ItemStack$Type): double
 "getItemTier"(): $DETier
 "getEnergyStored"(arg0: $ItemStack$Type): long
 "extractEnergy"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: long): long
 "m_8102_"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
 "readShareTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
 "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
 "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
 "isEquipped"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: boolean): boolean
 "getTechLevel"(): $TechLevel
 "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
 "addModularItemInformation"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
 "createHost"(arg0: $ItemStack$Type): $ModuleHostImpl
 "damageBarWidth"(arg0: $ItemStack$Type): integer
 "damageBarColour"(arg0: $ItemStack$Type): integer
 "handleTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $EquipmentSlot$Type, arg3: boolean): void
 "createOPStorage"(arg0: $ItemStack$Type, arg1: $ModuleHostImpl$Type): $ModularOPStorage
 "damageBarVisible"(arg0: $ItemStack$Type): boolean
 "getBaseEfficiency"(): float
 "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $MultiCapabilityProvider
 "initCapabilities"(arg0: $ItemStack$Type, arg1: $ModuleHostImpl$Type, arg2: $MultiCapabilityProvider$Type): void
 "getEnchantmentLevel"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): integer
 "elytraFlightTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): boolean
 "getFoodProperties"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): $FoodProperties
 "canContinueUsing"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "onStopUsing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): void
 "getEquipmentSlot"(arg0: $ItemStack$Type): $EquipmentSlot
 "getMaxDamage"(arg0: $ItemStack$Type): integer
 "isDamageable"(arg0: $ItemStack$Type): boolean
 "isRepairable"(arg0: $ItemStack$Type): boolean
 "onDroppedByPlayer"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
 "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
 "isPiglinCurrency"(arg0: $ItemStack$Type): boolean
 "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
 "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "getXpRepairRatio"(arg0: $ItemStack$Type): float
 "canEquip"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: $Entity$Type): boolean
 "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
 "hasCustomEntity"(arg0: $ItemStack$Type): boolean
 "onInventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: integer, arg4: integer): void
/**
 * 
 * @deprecated
 */
 "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
 "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
 "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
 "isDamaged"(arg0: $ItemStack$Type): boolean
 "getCreatorModId"(arg0: $ItemStack$Type): string
 "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
 "onHorseArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Mob$Type): void
 "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
 "makesPiglinsNeutral"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
 "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
 "getEnchantmentValue"(arg0: $ItemStack$Type): integer
 "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
 "getDefaultTooltipHideFlags"(arg0: $ItemStack$Type): integer
 "canGrindstoneRepair"(arg0: $ItemStack$Type): boolean
 "isNotReplaceableByPickAction"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: integer): boolean
 "shouldCauseBlockBreakReset"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "canWalkOnPowderedSnow"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "createEntity"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $ItemStack$Type): $Entity
 "getAllEnchantments"(arg0: $ItemStack$Type): $Map<($Enchantment), (integer)>
 "isEnderMask"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $EnderMan$Type): boolean
 "canDisableShield"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: $LivingEntity$Type): boolean
 "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
 "getSweepHitBox"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): $AABB
 "canElytraFly"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "onEntitySwing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "getEntityLifespan"(arg0: $ItemStack$Type, arg1: $Level$Type): integer
 "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
 "onDestroyed"(arg0: $ItemEntity$Type, arg1: $DamageSource$Type): void
 "getHighlightTip"(arg0: $ItemStack$Type, arg1: $Component$Type): $Component
 "getDamage"(arg0: $ItemStack$Type): integer
 "getMaxStackSize"(arg0: $ItemStack$Type): integer
 "transferIngredientData"(arg0: $ItemStack$Type, arg1: $IFusionInventory$Type): void
}

export namespace $IModularMiningTool {
const rand: $Random
function blockStrength(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $Level$Type, arg3: $BlockPos$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModularMiningTool$Type = ($IModularMiningTool);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModularMiningTool_ = $IModularMiningTool$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/machines/$EntityDetector" {
import {$EntityBlockBCore, $EntityBlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$EntityBlockBCore"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $EntityDetector extends $EntityBlockBCore {
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: boolean)

public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityDetector$Type = ($EntityDetector);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityDetector_ = $EntityDetector$Type;
}}
declare module "packages/com/brandon3055/brandonscore/api/$TechLevel" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$Rarity, $Rarity$Type} from "packages/net/minecraft/world/item/$Rarity"
import {$ChatFormatting, $ChatFormatting$Type} from "packages/net/minecraft/$ChatFormatting"

export class $TechLevel extends $Enum<($TechLevel)> {
static readonly "DRACONIUM": $TechLevel
static readonly "WYVERN": $TechLevel
static readonly "DRACONIC": $TechLevel
static readonly "CHAOTIC": $TechLevel
readonly "index": integer
static readonly "VALUES": ($TechLevel)[]
static readonly "TOOL_LEVELS": ($TechLevel)[]


public static "values"(): ($TechLevel)[]
public static "valueOf"(arg0: string): $TechLevel
public "getDisplayName"(): $Component
public "getRarity"(): $Rarity
public static "byIndex"(arg0: integer): $TechLevel
public "getHarvestLevel"(): integer
public "getTextColour"(): $ChatFormatting
get "displayName"(): $Component
get "rarity"(): $Rarity
get "harvestLevel"(): integer
get "textColour"(): $ChatFormatting
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TechLevel$Type = (("draconic") | ("chaotic") | ("wyvern") | ("draconium")) | ($TechLevel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TechLevel_ = $TechLevel$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/$DraconiumChest" {
import {$EntityBlockBCore, $EntityBlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$EntityBlockBCore"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $DraconiumChest extends $EntityBlockBCore {
static readonly "FACING": $DirectionProperty
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public static "isStackValid"(arg0: $ItemStack$Type): boolean
public "addRunningEffects"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
public "addLandingEffects"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $LivingEntity$Type, arg5: integer): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getNBTShareTag"(arg0: $ItemStack$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DraconiumChest$Type = ($DraconiumChest);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DraconiumChest_ = $DraconiumChest$Type;
}}
declare module "packages/com/brandon3055/brandonscore/api/$ElytraEnabledItem" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $ElytraEnabledItem {

 "elytraFlightTickBC"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): boolean
 "canElytraFlyBC"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
}

export namespace $ElytraEnabledItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElytraEnabledItem$Type = ($ElytraEnabledItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ElytraEnabledItem_ = $ElytraEnabledItem$Type;
}}
declare module "packages/com/brandon3055/brandonscore/lib/datamanager/$IManagedData" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$IDataManager, $IDataManager$Type} from "packages/com/brandon3055/brandonscore/lib/datamanager/$IDataManager"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$DataFlags, $DataFlags$Type} from "packages/com/brandon3055/brandonscore/lib/datamanager/$DataFlags"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"

export interface $IManagedData {

 "getName"(): string
 "flags"(): $DataFlags
 "toBytes"(arg0: $MCDataOutput$Type): void
 "validate"(): void
 "init"(arg0: $IDataManager$Type, arg1: integer): void
 "getIndex"(): integer
 "isDirty"(arg0: boolean): boolean
 "fromNBT"(arg0: $CompoundTag$Type): void
 "getDataManager"(): $IDataManager
 "fromBytes"(arg0: $MCDataInput$Type): void
 "toNBT"(arg0: $CompoundTag$Type): void
 "markDirty"(): void
}

export namespace $IManagedData {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IManagedData$Type = ($IManagedData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IManagedData_ = $IManagedData$Type;
}}
declare module "packages/com/brandon3055/brandonscore/items/$ItemBCore" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

/**
 * 
 * @deprecated
 */
export class $ItemBCore extends $Item {
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
export type $ItemBCore$Type = ($ItemBCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemBCore_ = $ItemBCore$Type;
}}
declare module "packages/com/brandon3055/brandonscore/utils/$TargetPos" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Vector3, $Vector3$Type} from "packages/codechicken/lib/vec/$Vector3"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ResourceKey, $ResourceKey$Type} from "packages/net/minecraft/resources/$ResourceKey"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $TargetPos {

constructor(arg0: double, arg1: double, arg2: double, arg3: $ResourceKey$Type<($Level$Type)>)
constructor(arg0: double, arg1: double, arg2: double, arg3: $ResourceKey$Type<($Level$Type)>, arg4: float, arg5: float)
constructor(arg0: $Vector3$Type, arg1: $ResourceKey$Type<($Level$Type)>)
constructor(arg0: $Vector3$Type, arg1: $ResourceKey$Type<($Level$Type)>, arg2: float, arg3: float)
constructor()
constructor(arg0: $Entity$Type)
constructor(arg0: $CompoundTag$Type)
constructor(arg0: $Entity$Type, arg1: boolean)

public "update"(arg0: $Entity$Type): void
public "write"(arg0: $MCDataOutput$Type): void
public "read"(arg0: $MCDataInput$Type): void
public "getX"(): double
public "readFromNBT"(arg0: $CompoundTag$Type): void
public "writeToNBT"(): $CompoundTag
public "writeToNBT"(arg0: $CompoundTag$Type): $CompoundTag
public "getY"(): double
public "setDimension"(arg0: $ResourceKey$Type<($Level$Type)>): $TargetPos
public "getZ"(): double
public "getDimension"(): $ResourceKey<($Level)>
public "setZ"(arg0: double): $TargetPos
public "setIncludeHeading"(arg0: boolean): $TargetPos
public "getYaw"(): float
public "setYaw"(arg0: float): $TargetPos
public "getPitch"(): float
public "setPitch"(arg0: float): $TargetPos
public "setPos"(arg0: $Vector3$Type): $TargetPos
public "getPos"(): $Vector3
public "getReadableName"(arg0: boolean): string
public "teleport"(arg0: $Entity$Type): $Entity
public "setY"(arg0: double): $TargetPos
public "setX"(arg0: double): $TargetPos
get "x"(): double
get "y"(): double
set "dimension"(value: $ResourceKey$Type<($Level$Type)>)
get "z"(): double
get "dimension"(): $ResourceKey<($Level)>
set "z"(value: double)
set "includeHeading"(value: boolean)
get "yaw"(): float
set "yaw"(value: float)
get "pitch"(): float
set "pitch"(value: float)
set "pos"(value: $Vector3$Type)
get "pos"(): $Vector3
set "y"(value: double)
set "x"(value: double)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TargetPos$Type = ($TargetPos);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TargetPos_ = $TargetPos$Type;
}}
declare module "packages/com/brandon3055/brandonscore/lib/$Pair" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Pair<K, V> {

constructor(arg0: K, arg1: V)

public "value"(): V
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "of"<K, V>(arg0: K, arg1: V): $Pair<(K), (V)>
public "key"(): K
public "setValue"(arg0: V): void
public "setKey"(arg0: K): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Pair$Type<K, V> = ($Pair<(K), (V)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Pair_<K, V> = $Pair$Type<(K), (V)>;
}}
declare module "packages/com/brandon3055/draconicevolution/api/$IReaperItem" {
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IReaperItem {

 "getReaperLevel"(arg0: $ItemStack$Type): integer

(arg0: $ItemStack$Type): integer
}

export namespace $IReaperItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IReaperItem$Type = ($IReaperItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IReaperItem_ = $IReaperItem$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/$DislocationInhibitor" {
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$BlockBCore, $BlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$BlockBCore"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $DislocationInhibitor extends $BlockBCore {
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DislocationInhibitor$Type = ($DislocationInhibitor);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DislocationInhibitor_ = $DislocationInhibitor$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/energy/$ICrystalBinder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ICrystalBinder {

}

export namespace $ICrystalBinder {
const BINDER_TAG: string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICrystalBinder$Type = ($ICrystalBinder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ICrystalBinder_ = $ICrystalBinder$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/modules/$ModuleType" {
import {$ModuleEntity, $ModuleEntity$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleEntity"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$ModuleCategory, $ModuleCategory$Type} from "packages/com/brandon3055/draconicevolution/api/modules/$ModuleCategory"
import {$ModuleData, $ModuleData$Type} from "packages/com/brandon3055/draconicevolution/api/modules/data/$ModuleData"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$ConfigProperty, $ConfigProperty$Type} from "packages/com/brandon3055/draconicevolution/api/config/$ConfigProperty"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$InstallResult, $InstallResult$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$InstallResult"
import {$Module, $Module$Type} from "packages/com/brandon3055/draconicevolution/api/modules/$Module"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $ModuleType<T extends $ModuleData<(T)>> {

 "getName"(): string
 "getData"(arg0: $Module$Type<(any)>): T
 "getDisplayName"(): $Component
 "getAttributeModifiers"(arg0: T, arg1: $EquipmentSlot$Type, arg2: $ItemStack$Type, arg3: $Multimap$Type<($Attribute$Type), ($AttributeModifier$Type)>): void
 "areModulesCompatible"(arg0: $Module$Type<(T)>, arg1: $Module$Type<(any)>): $InstallResult
 "createEntity"(arg0: $Module$Type<(T)>): $ModuleEntity<(any)>
 "getCategories"(): $Collection<($ModuleCategory)>
 "maxInstallable"(): integer
 "getDefaultWidth"(): integer
 "getDefaultHeight"(): integer
 "getTypeProperties"(arg0: T, arg1: $Map$Type<($ConfigProperty$Type), ($Consumer$Type<(T)>)>): void
}

export namespace $ModuleType {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModuleType$Type<T> = ($ModuleType<(T)>);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModuleType_<T> = $ModuleType$Type<(T)>;
}}
declare module "packages/com/brandon3055/draconicevolution/items/tools/$Magnet" {
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$ItemBCore, $ItemBCore$Type} from "packages/com/brandon3055/brandonscore/items/$ItemBCore"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Magnet extends $ItemBCore {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type, arg1: integer)

public static "isEnabled"(arg0: $ItemStack$Type): boolean
public static "toggleEnabled"(arg0: $ItemStack$Type, arg1: $Player$Type): void
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "inventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Entity$Type, arg3: integer, arg4: boolean): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<(any)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Magnet$Type = ($Magnet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Magnet_ = $Magnet$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModularOPStorage" {
import {$ModuleHost, $ModuleHost$Type} from "packages/com/brandon3055/draconicevolution/api/capability/$ModuleHost"
import {$OPStorage, $OPStorage$Type} from "packages/com/brandon3055/brandonscore/api/power/$OPStorage"
import {$TileBCore, $TileBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$TileBCore"

export class $ModularOPStorage extends $OPStorage {

constructor(arg0: $TileBCore$Type, arg1: long, arg2: long, arg3: long)
constructor(arg0: $TileBCore$Type, arg1: long, arg2: long)
constructor(arg0: $TileBCore$Type, arg1: long)
constructor(arg0: $ModuleHost$Type, arg1: long)
constructor(arg0: $ModuleHost$Type, arg1: long, arg2: long)
constructor(arg0: $ModuleHost$Type, arg1: long, arg2: long, arg3: long)

public "maxReceive"(): long
public "maxExtract"(): long
public "getMaxOPStored"(): long
public "markDirty"(): void
get "maxOPStored"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularOPStorage$Type = ($ModularOPStorage);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularOPStorage_ = $ModularOPStorage$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/energynet/$EnergyCrystal$CrystalType" {
import {$StringRepresentable$EnumCodec, $StringRepresentable$EnumCodec$Type} from "packages/net/minecraft/util/$StringRepresentable$EnumCodec"
import {$StringRepresentable, $StringRepresentable$Type} from "packages/net/minecraft/util/$StringRepresentable"
import {$Keyable, $Keyable$Type} from "packages/com/mojang/serialization/$Keyable"
import {$Function, $Function$Type} from "packages/java/util/function/$Function"
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$TechLevel, $TechLevel$Type} from "packages/com/brandon3055/brandonscore/api/$TechLevel"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $EnergyCrystal$CrystalType extends $Enum<($EnergyCrystal$CrystalType)> implements $StringRepresentable {
static readonly "RELAY": $EnergyCrystal$CrystalType
static readonly "CRYSTAL_IO": $EnergyCrystal$CrystalType
static readonly "WIRELESS": $EnergyCrystal$CrystalType


public static "values"(): ($EnergyCrystal$CrystalType)[]
public static "valueOf"(arg0: string): $EnergyCrystal$CrystalType
public "getIndex"(): integer
public "getSerializedName"(): string
public "createTile"(arg0: $TechLevel$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type): $BlockEntity
public static "fromEnum"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public static "keys"(arg0: ($StringRepresentable$Type)[]): $Keyable
public static "fromEnumWithMapping"<E extends ($Enum<(E)>) & ($StringRepresentable)>(arg0: $Supplier$Type<((E)[])>, arg1: $Function$Type<(string), (string)>): $StringRepresentable$EnumCodec<(E)>
get "index"(): integer
get "serializedName"(): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyCrystal$CrystalType$Type = (("relay") | ("crystal_io") | ("wireless")) | ($EnergyCrystal$CrystalType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EnergyCrystal$CrystalType_ = $EnergyCrystal$CrystalType$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/items/tools/$CrystalBinder" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$ICrystalBinder, $ICrystalBinder$Type} from "packages/com/brandon3055/draconicevolution/api/energy/$ICrystalBinder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $CrystalBinder extends $Item implements $ICrystalBinder {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrystalBinder$Type = ($CrystalBinder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CrystalBinder_ = $CrystalBinder$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/modules/data/$NoData" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModuleContext, $ModuleContext$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleContext"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Record, $Record$Type} from "packages/java/lang/$Record"
import {$ModuleData, $ModuleData$Type} from "packages/com/brandon3055/draconicevolution/api/modules/data/$ModuleData"
import {$List, $List$Type} from "packages/java/util/$List"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $NoData extends $Record implements $ModuleData<($NoData)> {

constructor()

public "equals"(arg0: any): boolean
public "toString"(): string
public "hashCode"(): integer
public "combine"(arg0: $NoData$Type): $NoData
public static "round"(arg0: double, arg1: double): double
/**
 * 
 * @deprecated
 */
public "addInformation"(arg0: $Map$Type<($Component$Type), ($Component$Type)>, arg1: $ModuleContext$Type, arg2: boolean): void
public "addInformation"(arg0: $Map$Type<($Component$Type), ($Component$Type)>, arg1: $ModuleContext$Type): void
public "addHostHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public static "formatNumber"(arg0: long): string
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NoData$Type = ($NoData);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $NoData_ = $NoData$Type;
}}
declare module "packages/com/brandon3055/brandonscore/blocks/$BlockBCore" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IBCoreBlock, $IBCoreBlock$Type} from "packages/com/brandon3055/brandonscore/lib/$IBCoreBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$EntityType, $EntityType$Type} from "packages/net/minecraft/world/entity/$EntityType"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$RenderHighlightEvent$Block, $RenderHighlightEvent$Block$Type} from "packages/net/minecraftforge/client/event/$RenderHighlightEvent$Block"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$SpawnPlacements$Type, $SpawnPlacements$Type$Type} from "packages/net/minecraft/world/entity/$SpawnPlacements$Type"
import {$SignalGetter, $SignalGetter$Type} from "packages/net/minecraft/world/level/$SignalGetter"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"

export class $BlockBCore extends $Block implements $IBCoreBlock {
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "shouldCheckWeakPower"(arg0: $BlockState$Type, arg1: $SignalGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "playerDestroy"(arg0: $Level$Type, arg1: $Player$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $BlockEntity$Type, arg5: $ItemStack$Type): void
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "dropFromExplosion"(arg0: $Explosion$Type): boolean
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isValidSpawn"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $SpawnPlacements$Type$Type, arg4: $EntityType$Type<(any)>): boolean
public "canEntityDestroy"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
public "onBlockExploded"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): void
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "isSignalSource"(arg0: $BlockState$Type): boolean
public "getShadeBrightness"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): float
public "attack"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type): void
public "getDirectSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "getSignal"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): integer
public "setExplosionResistant"(): $BlockBCore
public "setLightTransparent"(): $BlockBCore
public "setMobResistant"(): $BlockBCore
public "dontSpawnOnMe"(): $BlockBCore
public static "getStrongPower"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): integer
public static "getRedstonePower"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: $Direction$Type): integer
public "renderSelectionBox"(arg0: $RenderHighlightEvent$Block$Type, arg1: $Level$Type): boolean
public static "isBlockPowered"(arg0: $LevelReader$Type, arg1: $BlockPos$Type): boolean
public "getNBTShareTag"(arg0: $ItemStack$Type): $CompoundTag
public "overrideShareTag"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBCore$Type = ($BlockBCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $BlockBCore_ = $BlockBCore$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/items/equipment/$IModularTieredItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ModuleHost, $ModuleHost$Type} from "packages/com/brandon3055/draconicevolution/api/capability/$ModuleHost"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModuleHostImpl, $ModuleHostImpl$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleHostImpl"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$MultiCapabilityProvider, $MultiCapabilityProvider$Type} from "packages/com/brandon3055/brandonscore/capability/$MultiCapabilityProvider"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$IModularItem, $IModularItem$Type} from "packages/com/brandon3055/draconicevolution/items/equipment/$IModularItem"
import {$TechLevel, $TechLevel$Type} from "packages/com/brandon3055/brandonscore/api/$TechLevel"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$ModularOPStorage, $ModularOPStorage$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModularOPStorage"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IFusionInventory, $IFusionInventory$Type} from "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionInventory"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$DETier, $DETier$Type} from "packages/com/brandon3055/draconicevolution/items/equipment/$DETier"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IModularTieredItem extends $IModularItem {

 "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
 "getSwingSpeedMultiplier"(): double
 "getDamageMultiplier"(): double
 "getAttackDamage"(arg0: $ModuleHost$Type, arg1: $ItemStack$Type): double
 "getItemTier"(): $DETier
 "getEnergyStored"(arg0: $ItemStack$Type): long
 "extractEnergy"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: long): long
 "m_8102_"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
 "readShareTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
 "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
 "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
 "isEquipped"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: boolean): boolean
 "getTechLevel"(): $TechLevel
 "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
 "addModularItemInformation"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
 "createHost"(arg0: $ItemStack$Type): $ModuleHostImpl
 "damageBarWidth"(arg0: $ItemStack$Type): integer
 "damageBarColour"(arg0: $ItemStack$Type): integer
 "handleTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $EquipmentSlot$Type, arg3: boolean): void
 "createOPStorage"(arg0: $ItemStack$Type, arg1: $ModuleHostImpl$Type): $ModularOPStorage
 "damageBarVisible"(arg0: $ItemStack$Type): boolean
 "getBaseEfficiency"(): float
 "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $MultiCapabilityProvider
 "initCapabilities"(arg0: $ItemStack$Type, arg1: $ModuleHostImpl$Type, arg2: $MultiCapabilityProvider$Type): void
 "getEnchantmentLevel"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): integer
 "elytraFlightTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): boolean
 "getFoodProperties"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): $FoodProperties
 "canContinueUsing"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "onStopUsing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): void
 "getEquipmentSlot"(arg0: $ItemStack$Type): $EquipmentSlot
 "getMaxDamage"(arg0: $ItemStack$Type): integer
 "isDamageable"(arg0: $ItemStack$Type): boolean
 "isRepairable"(arg0: $ItemStack$Type): boolean
 "onDroppedByPlayer"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
 "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
 "isPiglinCurrency"(arg0: $ItemStack$Type): boolean
 "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
 "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "getXpRepairRatio"(arg0: $ItemStack$Type): float
 "canEquip"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: $Entity$Type): boolean
 "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
 "hasCustomEntity"(arg0: $ItemStack$Type): boolean
 "onInventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: integer, arg4: integer): void
/**
 * 
 * @deprecated
 */
 "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
 "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
 "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
 "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
 "isDamaged"(arg0: $ItemStack$Type): boolean
 "getCreatorModId"(arg0: $ItemStack$Type): string
 "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
 "onHorseArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Mob$Type): void
 "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
 "makesPiglinsNeutral"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
 "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
 "getEnchantmentValue"(arg0: $ItemStack$Type): integer
 "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
 "getDefaultTooltipHideFlags"(arg0: $ItemStack$Type): integer
 "canGrindstoneRepair"(arg0: $ItemStack$Type): boolean
 "isNotReplaceableByPickAction"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: integer): boolean
 "shouldCauseBlockBreakReset"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "canWalkOnPowderedSnow"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "createEntity"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $ItemStack$Type): $Entity
 "getAllEnchantments"(arg0: $ItemStack$Type): $Map<($Enchantment), (integer)>
 "isEnderMask"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $EnderMan$Type): boolean
 "canDisableShield"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: $LivingEntity$Type): boolean
 "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
 "getSweepHitBox"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): $AABB
 "canElytraFly"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "onEntitySwing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "getEntityLifespan"(arg0: $ItemStack$Type, arg1: $Level$Type): integer
 "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
 "onDestroyed"(arg0: $ItemEntity$Type, arg1: $DamageSource$Type): void
 "getHighlightTip"(arg0: $ItemStack$Type, arg1: $Component$Type): $Component
 "getDamage"(arg0: $ItemStack$Type): integer
 "getMaxStackSize"(arg0: $ItemStack$Type): integer
 "transferIngredientData"(arg0: $ItemStack$Type, arg1: $IFusionInventory$Type): void
}

export namespace $IModularTieredItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModularTieredItem$Type = ($IModularTieredItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModularTieredItem_ = $IModularTieredItem$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/reactor/$ReactorCore" {
import {$EntityBlockBCore, $EntityBlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$EntityBlockBCore"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$Explosion, $Explosion$Type} from "packages/net/minecraft/world/level/$Explosion"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ReactorCore extends $EntityBlockBCore {
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "addRunningEffects"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
public "addLandingEffects"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $LivingEntity$Type, arg5: integer): boolean
public "getExplosionResistance"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): float
public "onBlockExploded"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Explosion$Type): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getInteractionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getOcclusionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getDestroyProgress"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactorCore$Type = ($ReactorCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactorCore_ = $ReactorCore$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/items/equipment/$ModularStaff" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModuleHost, $ModuleHost$Type} from "packages/com/brandon3055/draconicevolution/api/capability/$ModuleHost"
import {$ModuleHostImpl, $ModuleHostImpl$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleHostImpl"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$InventoryDynamic, $InventoryDynamic$Type} from "packages/com/brandon3055/brandonscore/inventory/$InventoryDynamic"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MultiCapabilityProvider, $MultiCapabilityProvider$Type} from "packages/com/brandon3055/brandonscore/capability/$MultiCapabilityProvider"
import {$TechProperties, $TechProperties$Type} from "packages/com/brandon3055/draconicevolution/init/$TechProperties"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Pair, $Pair$Type} from "packages/com/brandon3055/brandonscore/lib/$Pair"
import {$IReaperItem, $IReaperItem$Type} from "packages/com/brandon3055/draconicevolution/api/$IReaperItem"
import {$TechLevel, $TechLevel$Type} from "packages/com/brandon3055/brandonscore/api/$TechLevel"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ModularOPStorage, $ModularOPStorage$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModularOPStorage"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IFusionInventory, $IFusionInventory$Type} from "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionInventory"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$IModularMelee, $IModularMelee$Type} from "packages/com/brandon3055/draconicevolution/items/equipment/$IModularMelee"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$DiggerItem, $DiggerItem$Type} from "packages/net/minecraft/world/item/$DiggerItem"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$DETier, $DETier$Type} from "packages/com/brandon3055/draconicevolution/items/equipment/$DETier"
import {$DamageModData, $DamageModData$Type} from "packages/com/brandon3055/draconicevolution/api/modules/data/$DamageModData"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$Module, $Module$Type} from "packages/com/brandon3055/draconicevolution/api/modules/$Module"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$IModularMiningTool, $IModularMiningTool$Type} from "packages/com/brandon3055/draconicevolution/items/equipment/$IModularMiningTool"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularStaff extends $DiggerItem implements $IReaperItem, $IModularMiningTool, $IModularMelee {
readonly "blocks": $TagKey<($Block)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $DETier$Type, arg1: $TechProperties$Type)

public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "getBarColor"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
public "getTechLevel"(): $TechLevel
public "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
public "canBeHurtBy"(arg0: $DamageSource$Type): boolean
public "getSwingSpeedMultiplier"(): double
public static "getRenderChargeState"(arg0: float): float
public "getDamageMultiplier"(): double
public "createHost"(arg0: $ItemStack$Type): $ModuleHostImpl
public "createOPStorage"(arg0: $ItemStack$Type, arg1: $ModuleHostImpl$Type): $ModularOPStorage
public "getBaseEfficiency"(): float
public "getItemTier"(): $DETier
public "getReaperLevel"(arg0: $ItemStack$Type): integer
public static "getDrawPower"(arg0: float): float
public static "getDamageModule"(arg0: $ItemStack$Type): $Module<($DamageModData)>
public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public static "blockStrength"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $Level$Type, arg3: $BlockPos$Type): float
public "breakAOEBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: float, arg5: $InventoryDynamic$Type, arg6: boolean): void
public "breakAOEBlocks"(arg0: $ModuleHost$Type, arg1: $ItemStack$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer, arg5: $Player$Type, arg6: boolean): boolean
public "getMiningArea"(arg0: $BlockPos$Type, arg1: $Player$Type, arg2: integer, arg3: integer): $Pair<($BlockPos), ($BlockPos)>
public "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
public "dealAOEDamage"(arg0: $Player$Type, arg1: $Entity$Type, arg2: $ItemStack$Type, arg3: long, arg4: float, arg5: double): void
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getAttackDamage"(arg0: $ModuleHost$Type, arg1: $ItemStack$Type): double
public "getEnergyStored"(arg0: $ItemStack$Type): long
public "extractEnergy"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: long): long
public "readShareTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
public "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "isEquipped"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: boolean): boolean
public "addModularItemInformation"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "damageBarWidth"(arg0: $ItemStack$Type): integer
public "damageBarColour"(arg0: $ItemStack$Type): integer
public "handleTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $EquipmentSlot$Type, arg3: boolean): void
public "damageBarVisible"(arg0: $ItemStack$Type): boolean
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $MultiCapabilityProvider
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $ModuleHostImpl$Type, arg2: $MultiCapabilityProvider$Type): void
public "transferIngredientData"(arg0: $ItemStack$Type, arg1: $IFusionInventory$Type): void
get "techLevel"(): $TechLevel
get "swingSpeedMultiplier"(): double
get "damageMultiplier"(): double
get "baseEfficiency"(): float
get "itemTier"(): $DETier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularStaff$Type = ($ModularStaff);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularStaff_ = $ModularStaff$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/items/equipment/$ModularPickaxe" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModuleHost, $ModuleHost$Type} from "packages/com/brandon3055/draconicevolution/api/capability/$ModuleHost"
import {$ModuleHostImpl, $ModuleHostImpl$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleHostImpl"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$TagKey, $TagKey$Type} from "packages/net/minecraft/tags/$TagKey"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$InventoryDynamic, $InventoryDynamic$Type} from "packages/com/brandon3055/brandonscore/inventory/$InventoryDynamic"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$MultiCapabilityProvider, $MultiCapabilityProvider$Type} from "packages/com/brandon3055/brandonscore/capability/$MultiCapabilityProvider"
import {$TechProperties, $TechProperties$Type} from "packages/com/brandon3055/draconicevolution/init/$TechProperties"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$Pair, $Pair$Type} from "packages/com/brandon3055/brandonscore/lib/$Pair"
import {$TechLevel, $TechLevel$Type} from "packages/com/brandon3055/brandonscore/api/$TechLevel"
import {$List, $List$Type} from "packages/java/util/$List"
import {$PickaxeItem, $PickaxeItem$Type} from "packages/net/minecraft/world/item/$PickaxeItem"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ModularOPStorage, $ModularOPStorage$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModularOPStorage"
import {$IFusionInventory, $IFusionInventory$Type} from "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionInventory"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$DETier, $DETier$Type} from "packages/com/brandon3055/draconicevolution/items/equipment/$DETier"
import {$Tier, $Tier$Type} from "packages/net/minecraft/world/item/$Tier"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$IDraconicMelee, $IDraconicMelee$Type} from "packages/com/brandon3055/draconicevolution/api/$IDraconicMelee"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$IModularMiningTool, $IModularMiningTool$Type} from "packages/com/brandon3055/draconicevolution/items/equipment/$IModularMiningTool"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ModularPickaxe extends $PickaxeItem implements $IModularMiningTool, $IDraconicMelee {
readonly "blocks": $TagKey<($Block)>
 "speed": float
 "defaultModifiers": $Multimap<($Attribute), ($AttributeModifier)>
 "tier": $Tier
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $DETier$Type, arg1: $TechProperties$Type)

public "isBarVisible"(arg0: $ItemStack$Type): boolean
public "getBarWidth"(arg0: $ItemStack$Type): integer
public "getDestroySpeed"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
public "getBarColor"(arg0: $ItemStack$Type): integer
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "getTechLevel"(): $TechLevel
public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
public "canBeHurtBy"(arg0: $DamageSource$Type): boolean
public "getSwingSpeedMultiplier"(): double
public "getDamageMultiplier"(): double
public "createHost"(arg0: $ItemStack$Type): $ModuleHostImpl
public "createOPStorage"(arg0: $ItemStack$Type, arg1: $ModuleHostImpl$Type): $ModularOPStorage
public "getBaseEfficiency"(): float
public "getItemTier"(): $DETier
public "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
public static "blockStrength"(arg0: $BlockState$Type, arg1: $Player$Type, arg2: $Level$Type, arg3: $BlockPos$Type): float
public "breakAOEBlock"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: float, arg5: $InventoryDynamic$Type, arg6: boolean): void
public "breakAOEBlocks"(arg0: $ModuleHost$Type, arg1: $ItemStack$Type, arg2: $BlockPos$Type, arg3: integer, arg4: integer, arg5: $Player$Type, arg6: boolean): boolean
public "getMiningArea"(arg0: $BlockPos$Type, arg1: $Player$Type, arg2: integer, arg3: integer): $Pair<($BlockPos), ($BlockPos)>
public "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
public "getAttackDamage"(arg0: $ModuleHost$Type, arg1: $ItemStack$Type): double
public "getEnergyStored"(arg0: $ItemStack$Type): long
public "extractEnergy"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: long): long
public "readShareTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
public "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
public "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
public "isEquipped"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: boolean): boolean
public "addModularItemInformation"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "damageBarWidth"(arg0: $ItemStack$Type): integer
public "damageBarColour"(arg0: $ItemStack$Type): integer
public "handleTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $EquipmentSlot$Type, arg3: boolean): void
public "damageBarVisible"(arg0: $ItemStack$Type): boolean
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $MultiCapabilityProvider
public "initCapabilities"(arg0: $ItemStack$Type, arg1: $ModuleHostImpl$Type, arg2: $MultiCapabilityProvider$Type): void
public "isRepairable"(arg0: $ItemStack$Type): boolean
public "transferIngredientData"(arg0: $ItemStack$Type, arg1: $IFusionInventory$Type): void
get "techLevel"(): $TechLevel
get "swingSpeedMultiplier"(): double
get "damageMultiplier"(): double
get "baseEfficiency"(): float
get "itemTier"(): $DETier
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularPickaxe$Type = ($ModularPickaxe);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ModularPickaxe_ = $ModularPickaxe$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/world/$ChaosIslandFeature" {
import {$RandomFeatureConfiguration, $RandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomFeatureConfiguration"
import {$SpikeConfiguration, $SpikeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpikeConfiguration"
import {$MultifaceGrowthConfiguration, $MultifaceGrowthConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$MultifaceGrowthConfiguration"
import {$RootSystemConfiguration, $RootSystemConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RootSystemConfiguration"
import {$UnderwaterMagmaConfiguration, $UnderwaterMagmaConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$UnderwaterMagmaConfiguration"
import {$WorldGenLevel, $WorldGenLevel$Type} from "packages/net/minecraft/world/level/$WorldGenLevel"
import {$TwistingVinesConfig, $TwistingVinesConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TwistingVinesConfig"
import {$FeaturePlaceContext, $FeaturePlaceContext$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FeaturePlaceContext"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$HugeMushroomFeatureConfiguration, $HugeMushroomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$HugeMushroomFeatureConfiguration"
import {$RandomSource, $RandomSource$Type} from "packages/net/minecraft/util/$RandomSource"
import {$HugeFungusConfiguration, $HugeFungusConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$HugeFungusConfiguration"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$FossilFeatureConfiguration, $FossilFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$FossilFeatureConfiguration"
import {$DeltaFeatureConfiguration, $DeltaFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DeltaFeatureConfiguration"
import {$ChunkPos, $ChunkPos$Type} from "packages/net/minecraft/world/level/$ChunkPos"
import {$BlockPileConfiguration, $BlockPileConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockPileConfiguration"
import {$OreConfiguration, $OreConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$OreConfiguration"
import {$SculkPatchConfiguration, $SculkPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SculkPatchConfiguration"
import {$NetherForestVegetationConfig, $NetherForestVegetationConfig$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NetherForestVegetationConfig"
import {$GeodeConfiguration, $GeodeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$GeodeConfiguration"
import {$RandomBooleanFeatureConfiguration, $RandomBooleanFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomBooleanFeatureConfiguration"
import {$ColumnFeatureConfiguration, $ColumnFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ColumnFeatureConfiguration"
import {$CountConfiguration, $CountConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$CountConfiguration"
import {$VegetationPatchConfiguration, $VegetationPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$VegetationPatchConfiguration"
import {$Feature, $Feature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$Feature"
import {$BonusChestFeature, $BonusChestFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$BonusChestFeature"
import {$LakeFeature$Configuration, $LakeFeature$Configuration$Type} from "packages/net/minecraft/world/level/levelgen/feature/$LakeFeature$Configuration"
import {$BlockColumnConfiguration, $BlockColumnConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockColumnConfiguration"
import {$RandomPatchConfiguration, $RandomPatchConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$RandomPatchConfiguration"
import {$ProbabilityFeatureConfiguration, $ProbabilityFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ProbabilityFeatureConfiguration"
import {$Codec, $Codec$Type} from "packages/com/mojang/serialization/$Codec"
import {$TreeConfiguration, $TreeConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$TreeConfiguration"
import {$DripstoneClusterConfiguration, $DripstoneClusterConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DripstoneClusterConfiguration"
import {$LayerConfiguration, $LayerConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LayerConfiguration"
import {$ReplaceBlockConfiguration, $ReplaceBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceBlockConfiguration"
import {$BlockStateConfiguration, $BlockStateConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$BlockStateConfiguration"
import {$SimpleBlockConfiguration, $SimpleBlockConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleBlockConfiguration"
import {$DiskConfiguration, $DiskConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$DiskConfiguration"
import {$SeagrassFeature, $SeagrassFeature$Type} from "packages/net/minecraft/world/level/levelgen/feature/$SeagrassFeature"
import {$ReplaceSphereConfiguration, $ReplaceSphereConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$ReplaceSphereConfiguration"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$PointedDripstoneConfiguration, $PointedDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$PointedDripstoneConfiguration"
import {$SpringConfiguration, $SpringConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SpringConfiguration"
import {$SimpleRandomFeatureConfiguration, $SimpleRandomFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$SimpleRandomFeatureConfiguration"
import {$LargeDripstoneConfiguration, $LargeDripstoneConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$LargeDripstoneConfiguration"
import {$NoneFeatureConfiguration, $NoneFeatureConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$NoneFeatureConfiguration"
import {$EndGatewayConfiguration, $EndGatewayConfiguration$Type} from "packages/net/minecraft/world/level/levelgen/feature/configurations/$EndGatewayConfiguration"

export class $ChaosIslandFeature extends $Feature<($NoneFeatureConfiguration)> {
static readonly "CLEAR_RAD": integer
static readonly "TRANS_DIST": integer
static readonly "NO_OP": $Feature<($NoneFeatureConfiguration)>
static readonly "TREE": $Feature<($TreeConfiguration)>
static readonly "FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "NO_BONEMEAL_FLOWER": $Feature<($RandomPatchConfiguration)>
static readonly "RANDOM_PATCH": $Feature<($RandomPatchConfiguration)>
static readonly "BLOCK_PILE": $Feature<($BlockPileConfiguration)>
static readonly "SPRING": $Feature<($SpringConfiguration)>
static readonly "CHORUS_PLANT": $Feature<($NoneFeatureConfiguration)>
static readonly "REPLACE_SINGLE_BLOCK": $Feature<($ReplaceBlockConfiguration)>
static readonly "VOID_START_PLATFORM": $Feature<($NoneFeatureConfiguration)>
static readonly "DESERT_WELL": $Feature<($NoneFeatureConfiguration)>
static readonly "FOSSIL": $Feature<($FossilFeatureConfiguration)>
static readonly "HUGE_RED_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "HUGE_BROWN_MUSHROOM": $Feature<($HugeMushroomFeatureConfiguration)>
static readonly "ICE_SPIKE": $Feature<($NoneFeatureConfiguration)>
static readonly "GLOWSTONE_BLOB": $Feature<($NoneFeatureConfiguration)>
static readonly "FREEZE_TOP_LAYER": $Feature<($NoneFeatureConfiguration)>
static readonly "VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "BLOCK_COLUMN": $Feature<($BlockColumnConfiguration)>
static readonly "VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "WATERLOGGED_VEGETATION_PATCH": $Feature<($VegetationPatchConfiguration)>
static readonly "ROOT_SYSTEM": $Feature<($RootSystemConfiguration)>
static readonly "MULTIFACE_GROWTH": $Feature<($MultifaceGrowthConfiguration)>
static readonly "UNDERWATER_MAGMA": $Feature<($UnderwaterMagmaConfiguration)>
static readonly "MONSTER_ROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "BLUE_ICE": $Feature<($NoneFeatureConfiguration)>
static readonly "ICEBERG": $Feature<($BlockStateConfiguration)>
static readonly "FOREST_ROCK": $Feature<($BlockStateConfiguration)>
static readonly "DISK": $Feature<($DiskConfiguration)>
static readonly "LAKE": $Feature<($LakeFeature$Configuration)>
static readonly "ORE": $Feature<($OreConfiguration)>
static readonly "END_SPIKE": $Feature<($SpikeConfiguration)>
static readonly "END_ISLAND": $Feature<($NoneFeatureConfiguration)>
static readonly "END_GATEWAY": $Feature<($EndGatewayConfiguration)>
static readonly "SEAGRASS": $SeagrassFeature
static readonly "KELP": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_TREE": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_MUSHROOM": $Feature<($NoneFeatureConfiguration)>
static readonly "CORAL_CLAW": $Feature<($NoneFeatureConfiguration)>
static readonly "SEA_PICKLE": $Feature<($CountConfiguration)>
static readonly "SIMPLE_BLOCK": $Feature<($SimpleBlockConfiguration)>
static readonly "BAMBOO": $Feature<($ProbabilityFeatureConfiguration)>
static readonly "HUGE_FUNGUS": $Feature<($HugeFungusConfiguration)>
static readonly "NETHER_FOREST_VEGETATION": $Feature<($NetherForestVegetationConfig)>
static readonly "WEEPING_VINES": $Feature<($NoneFeatureConfiguration)>
static readonly "TWISTING_VINES": $Feature<($TwistingVinesConfig)>
static readonly "BASALT_COLUMNS": $Feature<($ColumnFeatureConfiguration)>
static readonly "DELTA_FEATURE": $Feature<($DeltaFeatureConfiguration)>
static readonly "REPLACE_BLOBS": $Feature<($ReplaceSphereConfiguration)>
static readonly "FILL_LAYER": $Feature<($LayerConfiguration)>
static readonly "BONUS_CHEST": $BonusChestFeature
static readonly "BASALT_PILLAR": $Feature<($NoneFeatureConfiguration)>
static readonly "SCATTERED_ORE": $Feature<($OreConfiguration)>
static readonly "RANDOM_SELECTOR": $Feature<($RandomFeatureConfiguration)>
static readonly "SIMPLE_RANDOM_SELECTOR": $Feature<($SimpleRandomFeatureConfiguration)>
static readonly "RANDOM_BOOLEAN_SELECTOR": $Feature<($RandomBooleanFeatureConfiguration)>
static readonly "GEODE": $Feature<($GeodeConfiguration)>
static readonly "DRIPSTONE_CLUSTER": $Feature<($DripstoneClusterConfiguration)>
static readonly "LARGE_DRIPSTONE": $Feature<($LargeDripstoneConfiguration)>
static readonly "POINTED_DRIPSTONE": $Feature<($PointedDripstoneConfiguration)>
static readonly "SCULK_PATCH": $Feature<($SculkPatchConfiguration)>

constructor(arg0: $Codec$Type<($NoneFeatureConfiguration$Type)>)

public "place"(arg0: $FeaturePlaceContext$Type<($NoneFeatureConfiguration$Type)>): boolean
public static "overrideBiome"(arg0: $ChunkPos$Type, arg1: $ChunkPos$Type): boolean
public static "getClosestSpawn"(arg0: $ChunkPos$Type): $ChunkPos
public static "overrideHeightValue"(arg0: $ChunkPos$Type, arg1: $ChunkPos$Type, arg2: float, arg3: $Consumer$Type<(float)>): void
public "genRingChunk"(arg0: $WorldGenLevel$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): boolean
public "genIslandChunk"(arg0: $WorldGenLevel$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): boolean
public "genCoreChunk"(arg0: $WorldGenLevel$Type, arg1: $BlockPos$Type, arg2: $BlockPos$Type, arg3: $RandomSource$Type): boolean
public "genCoreSlice"(arg0: $WorldGenLevel$Type, arg1: double, arg2: double, arg3: $BlockPos$Type, arg4: integer, arg5: integer, arg6: boolean, arg7: $RandomSource$Type): boolean
public static "generateObelisk"(arg0: $ServerLevel$Type, arg1: $BlockPos$Type, arg2: $RandomSource$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChaosIslandFeature$Type = ($ChaosIslandFeature);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ChaosIslandFeature_ = $ChaosIslandFeature$Type;
}}
declare module "packages/com/brandon3055/brandonscore/blocks/$EntityBlockBCore" {
import {$EntityBlock, $EntityBlock$Type} from "packages/net/minecraft/world/level/block/$EntityBlock"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockBCore, $BlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$BlockBCore"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$Supplier, $Supplier$Type} from "packages/java/util/function/$Supplier"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockEntityTicker, $BlockEntityTicker$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityTicker"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$GameEventListener, $GameEventListener$Type} from "packages/net/minecraft/world/level/gameevent/$GameEventListener"

export class $EntityBlockBCore extends $BlockBCore implements $EntityBlock {
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "setBlockEntity"(arg0: $Supplier$Type<($BlockEntityType$Type<(any)>)>, arg1: boolean): $BlockBCore
public "getTicker"<T extends $BlockEntity>(arg0: $Level$Type, arg1: $BlockState$Type, arg2: $BlockEntityType$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$Type, arg1: $BlockState$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityBlockBCore$Type = ($EntityBlockBCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EntityBlockBCore_ = $EntityBlockBCore$Type;
}}
declare module "packages/com/brandon3055/brandonscore/blocks/$TileBCore" {
import {$LazyOptional, $LazyOptional$Type} from "packages/net/minecraftforge/common/util/$LazyOptional"
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$IOPStorage, $IOPStorage$Type} from "packages/com/brandon3055/brandonscore/api/power/$IOPStorage"
import {$Connection, $Connection$Type} from "packages/net/minecraft/network/$Connection"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$MCDataInput, $MCDataInput$Type} from "packages/codechicken/lib/data/$MCDataInput"
import {$IRSSwitchable$RSMode, $IRSSwitchable$RSMode$Type} from "packages/com/brandon3055/brandonscore/lib/$IRSSwitchable$RSMode"
import {$PacketCustom, $PacketCustom$Type} from "packages/codechicken/lib/packet/$PacketCustom"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$Type} from "packages/net/minecraft/network/protocol/game/$ClientboundBlockEntityDataPacket"
import {$Runnable, $Runnable$Type} from "packages/java/lang/$Runnable"
import {$ManagedBool, $ManagedBool$Type} from "packages/com/brandon3055/brandonscore/lib/datamanager/$ManagedBool"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$BlockEntity, $BlockEntity$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntity"
import {$IManagedData, $IManagedData$Type} from "packages/com/brandon3055/brandonscore/lib/datamanager/$IManagedData"
import {$INBTSerializable, $INBTSerializable$Type} from "packages/net/minecraftforge/common/util/$INBTSerializable"
import {$OPStorage, $OPStorage$Type} from "packages/com/brandon3055/brandonscore/api/power/$OPStorage"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$ServerPlayer, $ServerPlayer$Type} from "packages/net/minecraft/server/level/$ServerPlayer"
import {$IDataManagerProvider, $IDataManagerProvider$Type} from "packages/com/brandon3055/brandonscore/lib/datamanager/$IDataManagerProvider"
import {$Collection, $Collection$Type} from "packages/java/util/$Collection"
import {$BlockEntityType, $BlockEntityType$Type} from "packages/net/minecraft/world/level/block/entity/$BlockEntityType"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IItemHandler, $IItemHandler$Type} from "packages/net/minecraftforge/items/$IItemHandler"
import {$Capability, $Capability$Type} from "packages/net/minecraftforge/common/capabilities/$Capability"
import {$IDataRetainingTile, $IDataRetainingTile$Type} from "packages/com/brandon3055/brandonscore/api/$IDataRetainingTile"
import {$BiConsumer, $BiConsumer$Type} from "packages/java/util/function/$BiConsumer"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$Set, $Set$Type} from "packages/java/util/$Set"
import {$Logger, $Logger$Type} from "packages/org/apache/logging/log4j/$Logger"
import {$TileCapabilityManager, $TileCapabilityManager$Type} from "packages/com/brandon3055/brandonscore/blocks/$TileCapabilityManager"
import {$MCDataOutput, $MCDataOutput$Type} from "packages/codechicken/lib/data/$MCDataOutput"
import {$Nameable, $Nameable$Type} from "packages/net/minecraft/world/$Nameable"

export class $TileBCore extends $BlockEntity implements $IDataManagerProvider, $IDataRetainingTile, $Nameable {
static readonly "LOGGER": $Logger

constructor(arg0: $BlockEntityType$Type<(any)>, arg1: $BlockPos$Type, arg2: $BlockState$Type)

public "register"<M extends $IManagedData>(arg0: M): M
public "debug"(arg0: any): void
public "debugEnabled"(): boolean
public "getTime"(): integer
public "tick"(): void
public "getCapability"<T>(arg0: $Capability$Type<(T)>, arg1: $Direction$Type): $LazyOptional<(T)>
public "setCustomName"(arg0: string): void
public "updateBlock"(): void
public "sendPacketToClient"(arg0: $ServerPlayer$Type, arg1: $Consumer$Type<($MCDataOutput$Type)>, arg2: integer): void
public "sendPacketToClient"(arg0: $Consumer$Type<($MCDataOutput$Type)>, arg1: integer): $PacketCustom
public "hasRSSignal"(): boolean
public "receivePacketFromServer"(arg0: $MCDataInput$Type, arg1: integer): void
public "getCapManager"(): $TileCapabilityManager
public "sendPacketToServer"(arg0: $Consumer$Type<($MCDataOutput$Type)>, arg1: integer): void
public "invalidateCaps"(): void
public "dirtyBlock"(): void
public "sendPacketToChunk"(arg0: $Consumer$Type<($MCDataOutput$Type)>, arg1: integer): void
public "writeExtraNBT"(arg0: $CompoundTag$Type): void
public "readExtraNBT"(arg0: $CompoundTag$Type): void
public "setSavedDataObject"(arg0: string, arg1: $INBTSerializable$Type<($CompoundTag$Type)>): void
public "addTickable"<T extends $Runnable>(arg0: T): T
public "removeTickable"(arg0: $Runnable$Type): boolean
public "onTileLoaded"(): void
public "setupPowerSlot"(arg0: $IItemHandler$Type, arg1: integer, arg2: $IOPStorage$Type, arg3: boolean): void
public "setupPowerSlot"(arg0: $IItemHandler$Type, arg1: integer, arg2: $IOPStorage$Type, arg3: $ManagedBool$Type): void
public "getRSSignal"(): integer
public "onInterval"(arg0: integer): boolean
public "installIOTracker"(arg0: $OPStorage$Type): void
public "isTileEnabled"(): boolean
public "sendEnergyToAll"(arg0: long, arg1: long): long
public static "sendEnergyToAll"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: long, arg3: long): long
public "onSignalChange"(arg0: boolean): void
public "cycleRSMode"(arg0: boolean): void
public "setRSMode"(arg0: $IRSSwitchable$RSMode$Type): void
public "sendEnergyTo"(arg0: long, arg1: $Direction$Type): long
public static "sendEnergyTo"(arg0: $LevelReader$Type, arg1: $BlockPos$Type, arg2: long, arg3: $Direction$Type): long
public "posSeed"(): integer
public "toggleDebugOutput"(arg0: $Player$Type): boolean
public "onNeighborChange"(arg0: $BlockPos$Type): void
public "load"(arg0: $CompoundTag$Type): void
public "getUpdateTag"(): $CompoundTag
public "onDataPacket"(arg0: $Connection$Type, arg1: $ClientboundBlockEntityDataPacket$Type): void
public "enablePlayerAccessTracking"(arg0: boolean): void
public "getAccessingPlayers"(): $Set<($Player)>
public "getAccessDistanceSq"(): integer
public "createServerBoundPacket"(arg0: integer): $PacketCustom
public "receivePacketFromClient"(arg0: $MCDataInput$Type, arg1: $ServerPlayer$Type, arg2: integer): void
public "sendPacketToClients"(arg0: $Collection$Type<($Player$Type)>, arg1: $Consumer$Type<($MCDataOutput$Type)>, arg2: integer): void
public "sendPacketToClients"(arg0: $Collection$Type<($Player$Type)>, arg1: $PacketCustom$Type): void
public "setClientSidePacketHandler"(arg0: integer, arg1: $Consumer$Type<($MCDataInput$Type)>): void
public "setServerSidePacketHandler"(arg0: integer, arg1: $BiConsumer$Type<($MCDataInput$Type), ($ServerPlayer$Type)>): void
public "writeExtraTileAndStack"(arg0: $CompoundTag$Type): void
public "readExtraTileAndStack"(arg0: $CompoundTag$Type): void
public "onPlayerOpenContainer"(arg0: $Player$Type): void
public "setItemSavedDataObject"(arg0: string, arg1: $INBTSerializable$Type<($CompoundTag$Type)>): void
public "onPlayerCloseContainer"(arg0: $Player$Type): void
public "createClientBoundPacket"(arg0: integer): $PacketCustom
public "getCustomName"(): $Component
public "getName"(): $Component
public "getDisplayName"(): $Component
public "hasCustomName"(): boolean
public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "getRSMode"(): $IRSSwitchable$RSMode
public "detectAndSendChanges"(arg0: boolean): void
public "writeToItemStack"(arg0: $CompoundTag$Type, arg1: boolean): void
public "readFromItemStack"(arg0: $CompoundTag$Type): void
public "saveToItem"(): boolean
get "time"(): integer
set "customName"(value: string)
get "capManager"(): $TileCapabilityManager
get "rSSignal"(): integer
get "tileEnabled"(): boolean
set "rSMode"(value: $IRSSwitchable$RSMode$Type)
get "updateTag"(): $CompoundTag
get "accessingPlayers"(): $Set<($Player)>
get "accessDistanceSq"(): integer
get "customName"(): $Component
get "name"(): $Component
get "displayName"(): $Component
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "rSMode"(): $IRSSwitchable$RSMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TileBCore$Type = ($TileBCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $TileBCore_ = $TileBCore$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/reactor/$ReactorComponent" {
import {$EntityBlockBCore, $EntityBlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$EntityBlockBCore"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockHitResult, $BlockHitResult$Type} from "packages/net/minecraft/world/phys/$BlockHitResult"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$RenderShape, $RenderShape$Type} from "packages/net/minecraft/world/level/block/$RenderShape"

export class $ReactorComponent extends $EntityBlockBCore {
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type, arg1: boolean)

public "addRunningEffects"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
public "addLandingEffects"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $LivingEntity$Type, arg5: integer): boolean
public "setPlacedBy"(arg0: $Level$Type, arg1: $BlockPos$Type, arg2: $BlockState$Type, arg3: $LivingEntity$Type, arg4: $ItemStack$Type): void
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "use"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: $InteractionHand$Type, arg5: $BlockHitResult$Type): $InteractionResult
public "getRenderShape"(arg0: $BlockState$Type): $RenderShape
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactorComponent$Type = ($ReactorComponent);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ReactorComponent_ = $ReactorComponent$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/config/$ConfigProperty$BooleanFormatter" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ConfigProperty$BooleanFormatter extends $Enum<($ConfigProperty$BooleanFormatter)> {
static readonly "TRUE_FALSE": $ConfigProperty$BooleanFormatter
static readonly "ENABLED_DISABLED": $ConfigProperty$BooleanFormatter
static readonly "ACTIVE_INACTIVE": $ConfigProperty$BooleanFormatter
static readonly "YES_NO": $ConfigProperty$BooleanFormatter


public static "values"(): ($ConfigProperty$BooleanFormatter)[]
public static "valueOf"(arg0: string): $ConfigProperty$BooleanFormatter
public "format"(arg0: boolean): string
public static "getSafe"(arg0: integer): $ConfigProperty$BooleanFormatter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigProperty$BooleanFormatter$Type = (("active_inactive") | ("true_false") | ("yes_no") | ("enabled_disabled")) | ($ConfigProperty$BooleanFormatter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigProperty$BooleanFormatter_ = $ConfigProperty$BooleanFormatter$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/machines/$FusionCraftingCore" {
import {$EntityBlockBCore, $EntityBlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$EntityBlockBCore"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $FusionCraftingCore extends $EntityBlockBCore {
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "neighborChanged"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Block$Type, arg4: $BlockPos$Type, arg5: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type): integer
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FusionCraftingCore$Type = ($FusionCraftingCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FusionCraftingCore_ = $FusionCraftingCore$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/items/$InfoTablet" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $InfoTablet extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public static "openPIGui"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfoTablet$Type = ($InfoTablet);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $InfoTablet_ = $InfoTablet$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/machines/$Grinder" {
import {$EntityBlockBCore, $EntityBlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$EntityBlockBCore"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$BlockPlaceContext, $BlockPlaceContext$Type} from "packages/net/minecraft/world/item/context/$BlockPlaceContext"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"

export class $Grinder extends $EntityBlockBCore {
static readonly "FACING": $DirectionProperty
static readonly "ACTIVE": $BooleanProperty
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$Type): $BlockState
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Grinder$Type = ($Grinder);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Grinder_ = $Grinder$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/items/equipment/$IModularMelee" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ModuleHost, $ModuleHost$Type} from "packages/com/brandon3055/draconicevolution/api/capability/$ModuleHost"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModuleHostImpl, $ModuleHostImpl$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleHostImpl"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$MultiCapabilityProvider, $MultiCapabilityProvider$Type} from "packages/com/brandon3055/brandonscore/capability/$MultiCapabilityProvider"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$TechLevel, $TechLevel$Type} from "packages/com/brandon3055/brandonscore/api/$TechLevel"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$ModularOPStorage, $ModularOPStorage$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModularOPStorage"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IFusionInventory, $IFusionInventory$Type} from "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionInventory"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$DETier, $DETier$Type} from "packages/com/brandon3055/draconicevolution/items/equipment/$DETier"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$IModularTieredItem, $IModularTieredItem$Type} from "packages/com/brandon3055/draconicevolution/items/equipment/$IModularTieredItem"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$IDraconicMelee, $IDraconicMelee$Type} from "packages/com/brandon3055/draconicevolution/api/$IDraconicMelee"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IModularMelee extends $IModularTieredItem, $IDraconicMelee {

 "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
 "dealAOEDamage"(arg0: $Player$Type, arg1: $Entity$Type, arg2: $ItemStack$Type, arg3: long, arg4: float, arg5: double): void
 "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
 "getSwingSpeedMultiplier"(): double
 "getDamageMultiplier"(): double
 "getAttackDamage"(arg0: $ModuleHost$Type, arg1: $ItemStack$Type): double
 "getItemTier"(): $DETier
 "getTechLevel"(): $TechLevel
 "getEnergyStored"(arg0: $ItemStack$Type): long
 "extractEnergy"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: long): long
 "m_8102_"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
 "readShareTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
 "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
 "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
 "isEquipped"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: boolean): boolean
 "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
 "addModularItemInformation"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
 "createHost"(arg0: $ItemStack$Type): $ModuleHostImpl
 "damageBarWidth"(arg0: $ItemStack$Type): integer
 "damageBarColour"(arg0: $ItemStack$Type): integer
 "handleTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $EquipmentSlot$Type, arg3: boolean): void
 "createOPStorage"(arg0: $ItemStack$Type, arg1: $ModuleHostImpl$Type): $ModularOPStorage
 "damageBarVisible"(arg0: $ItemStack$Type): boolean
 "getBaseEfficiency"(): float
 "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $MultiCapabilityProvider
 "initCapabilities"(arg0: $ItemStack$Type, arg1: $ModuleHostImpl$Type, arg2: $MultiCapabilityProvider$Type): void
 "getEnchantmentLevel"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): integer
 "elytraFlightTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): boolean
 "getFoodProperties"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): $FoodProperties
 "canContinueUsing"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "onStopUsing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): void
 "getEquipmentSlot"(arg0: $ItemStack$Type): $EquipmentSlot
 "getMaxDamage"(arg0: $ItemStack$Type): integer
 "isDamageable"(arg0: $ItemStack$Type): boolean
 "isRepairable"(arg0: $ItemStack$Type): boolean
 "onDroppedByPlayer"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
 "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
 "isPiglinCurrency"(arg0: $ItemStack$Type): boolean
 "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
 "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "getXpRepairRatio"(arg0: $ItemStack$Type): float
 "canEquip"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: $Entity$Type): boolean
 "hasCustomEntity"(arg0: $ItemStack$Type): boolean
 "onInventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: integer, arg4: integer): void
/**
 * 
 * @deprecated
 */
 "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
 "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
 "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
 "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
 "isDamaged"(arg0: $ItemStack$Type): boolean
 "getCreatorModId"(arg0: $ItemStack$Type): string
 "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
 "onHorseArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Mob$Type): void
 "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
 "makesPiglinsNeutral"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
 "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
 "getEnchantmentValue"(arg0: $ItemStack$Type): integer
 "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
 "getDefaultTooltipHideFlags"(arg0: $ItemStack$Type): integer
 "canGrindstoneRepair"(arg0: $ItemStack$Type): boolean
 "isNotReplaceableByPickAction"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: integer): boolean
 "shouldCauseBlockBreakReset"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "canWalkOnPowderedSnow"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "createEntity"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $ItemStack$Type): $Entity
 "getAllEnchantments"(arg0: $ItemStack$Type): $Map<($Enchantment), (integer)>
 "isEnderMask"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $EnderMan$Type): boolean
 "canDisableShield"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: $LivingEntity$Type): boolean
 "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
 "getSweepHitBox"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): $AABB
 "canElytraFly"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "onEntitySwing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "getEntityLifespan"(arg0: $ItemStack$Type, arg1: $Level$Type): integer
 "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
 "onDestroyed"(arg0: $ItemEntity$Type, arg1: $DamageSource$Type): void
 "getHighlightTip"(arg0: $ItemStack$Type, arg1: $Component$Type): $Component
 "getDamage"(arg0: $ItemStack$Type): integer
 "getMaxStackSize"(arg0: $ItemStack$Type): integer
 "transferIngredientData"(arg0: $ItemStack$Type, arg1: $IFusionInventory$Type): void
}

export namespace $IModularMelee {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModularMelee$Type = ($IModularMelee);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModularMelee_ = $IModularMelee$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/crafting/$FusionRecipe$FusionIngredient" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"
import {$IFusionRecipe$IFusionIngredient, $IFusionRecipe$IFusionIngredient$Type} from "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionRecipe$IFusionIngredient"

export class $FusionRecipe$FusionIngredient implements $IFusionRecipe$IFusionIngredient {

constructor(arg0: $Ingredient$Type, arg1: boolean)

public "get"(): $Ingredient
public "consume"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FusionRecipe$FusionIngredient$Type = ($FusionRecipe$FusionIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FusionRecipe$FusionIngredient_ = $FusionRecipe$FusionIngredient$Type;
}}
declare module "packages/com/brandon3055/brandonscore/client/render/$EquippedItemModel" {
import {$PoseStack, $PoseStack$Type} from "packages/com/mojang/blaze3d/vertex/$PoseStack"
import {$MultiBufferSource, $MultiBufferSource$Type} from "packages/net/minecraft/client/renderer/$MultiBufferSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $EquippedItemModel {

 "render"(arg0: $LivingEntity$Type, arg1: $PoseStack$Type, arg2: $MultiBufferSource$Type, arg3: $ItemStack$Type, arg4: integer, arg5: integer, arg6: float): void

(arg0: $LivingEntity$Type, arg1: $PoseStack$Type, arg2: $MultiBufferSource$Type, arg3: $ItemStack$Type, arg4: integer, arg5: integer, arg6: float): void
}

export namespace $EquippedItemModel {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquippedItemModel$Type = ($EquippedItemModel);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquippedItemModel_ = $EquippedItemModel$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/items/$ItemCore" {
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export class $ItemCore extends $Item {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "useOn"(arg0: $UseOnContext$Type): $InteractionResult
public "isFoil"(arg0: $ItemStack$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCore$Type = ($ItemCore);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ItemCore_ = $ItemCore$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/$CreativeOPSource" {
import {$EntityBlockBCore, $EntityBlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$EntityBlockBCore"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $CreativeOPSource extends $EntityBlockBCore {
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeOPSource$Type = ($CreativeOPSource);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $CreativeOPSource_ = $CreativeOPSource$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/items/equipment/$IModularItem" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$ModuleHostImpl, $ModuleHostImpl$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModuleHostImpl"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$IForgeItem, $IForgeItem$Type} from "packages/net/minecraftforge/common/extensions/$IForgeItem"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$FoodProperties, $FoodProperties$Type} from "packages/net/minecraft/world/food/$FoodProperties"
import {$MultiCapabilityProvider, $MultiCapabilityProvider$Type} from "packages/com/brandon3055/brandonscore/capability/$MultiCapabilityProvider"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Mob, $Mob$Type} from "packages/net/minecraft/world/entity/$Mob"
import {$Consumer, $Consumer$Type} from "packages/java/util/function/$Consumer"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$RecipeType, $RecipeType$Type} from "packages/net/minecraft/world/item/crafting/$RecipeType"
import {$TechLevel, $TechLevel$Type} from "packages/com/brandon3055/brandonscore/api/$TechLevel"
import {$ToolAction, $ToolAction$Type} from "packages/net/minecraftforge/common/$ToolAction"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$AABB, $AABB$Type} from "packages/net/minecraft/world/phys/$AABB"
import {$ModularOPStorage, $ModularOPStorage$Type} from "packages/com/brandon3055/draconicevolution/api/modules/lib/$ModularOPStorage"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"
import {$IFusionInventory, $IFusionInventory$Type} from "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionInventory"
import {$Multimap, $Multimap$Type} from "packages/com/google/common/collect/$Multimap"
import {$InteractionResult, $InteractionResult$Type} from "packages/net/minecraft/world/$InteractionResult"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IFusionDataTransfer, $IFusionDataTransfer$Type} from "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionDataTransfer"
import {$EnderMan, $EnderMan$Type} from "packages/net/minecraft/world/entity/monster/$EnderMan"
import {$LevelReader, $LevelReader$Type} from "packages/net/minecraft/world/level/$LevelReader"
import {$UseOnContext, $UseOnContext$Type} from "packages/net/minecraft/world/item/context/$UseOnContext"
import {$Enchantment, $Enchantment$Type} from "packages/net/minecraft/world/item/enchantment/$Enchantment"
import {$Attribute, $Attribute$Type} from "packages/net/minecraft/world/entity/ai/attributes/$Attribute"
import {$AttributeModifier, $AttributeModifier$Type} from "packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$Map, $Map$Type} from "packages/java/util/$Map"

export interface $IModularItem extends $IForgeItem, $IFusionDataTransfer {

 "getEnergyStored"(arg0: $ItemStack$Type): long
 "extractEnergy"(arg0: $Player$Type, arg1: $ItemStack$Type, arg2: long): long
 "m_8102_"(arg0: $ItemStack$Type, arg1: $BlockState$Type): float
 "readShareTag"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): void
 "getShareTag"(arg0: $ItemStack$Type): $CompoundTag
 "getAttributeModifiers"(arg0: $EquipmentSlot$Type, arg1: $ItemStack$Type): $Multimap<($Attribute), ($AttributeModifier)>
 "shouldCauseReequipAnimation"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: boolean): boolean
 "isEquipped"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: boolean): boolean
 "getTechLevel"(): $TechLevel
 "isCorrectToolForDrops"(arg0: $ItemStack$Type, arg1: $BlockState$Type): boolean
 "addModularItemInformation"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
 "createHost"(arg0: $ItemStack$Type): $ModuleHostImpl
 "damageBarWidth"(arg0: $ItemStack$Type): integer
 "damageBarColour"(arg0: $ItemStack$Type): integer
 "handleTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: $EquipmentSlot$Type, arg3: boolean): void
 "createOPStorage"(arg0: $ItemStack$Type, arg1: $ModuleHostImpl$Type): $ModularOPStorage
 "damageBarVisible"(arg0: $ItemStack$Type): boolean
 "getBaseEfficiency"(): float
 "initCapabilities"(arg0: $ItemStack$Type, arg1: $CompoundTag$Type): $MultiCapabilityProvider
 "initCapabilities"(arg0: $ItemStack$Type, arg1: $ModuleHostImpl$Type, arg2: $MultiCapabilityProvider$Type): void
 "getEnchantmentLevel"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): integer
 "elytraFlightTick"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): boolean
 "getFoodProperties"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): $FoodProperties
 "canContinueUsing"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "onStopUsing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type, arg2: integer): void
 "getEquipmentSlot"(arg0: $ItemStack$Type): $EquipmentSlot
 "getMaxDamage"(arg0: $ItemStack$Type): integer
 "isDamageable"(arg0: $ItemStack$Type): boolean
 "isRepairable"(arg0: $ItemStack$Type): boolean
 "onDroppedByPlayer"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
 "onItemUseFirst"(arg0: $ItemStack$Type, arg1: $UseOnContext$Type): $InteractionResult
 "isPiglinCurrency"(arg0: $ItemStack$Type): boolean
 "doesSneakBypassUse"(arg0: $ItemStack$Type, arg1: $LevelReader$Type, arg2: $BlockPos$Type, arg3: $Player$Type): boolean
 "isBookEnchantable"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "getXpRepairRatio"(arg0: $ItemStack$Type): float
 "canEquip"(arg0: $ItemStack$Type, arg1: $EquipmentSlot$Type, arg2: $Entity$Type): boolean
 "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
 "hasCustomEntity"(arg0: $ItemStack$Type): boolean
 "onInventoryTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type, arg3: integer, arg4: integer): void
/**
 * 
 * @deprecated
 */
 "onArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Player$Type): void
 "getArmorTexture"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $EquipmentSlot$Type, arg3: string): string
 "onBlockStartBreak"(arg0: $ItemStack$Type, arg1: $BlockPos$Type, arg2: $Player$Type): boolean
 "setDamage"(arg0: $ItemStack$Type, arg1: integer): void
 "isDamaged"(arg0: $ItemStack$Type): boolean
 "getCreatorModId"(arg0: $ItemStack$Type): string
 "getBurnTime"(arg0: $ItemStack$Type, arg1: $RecipeType$Type<(any)>): integer
 "onHorseArmorTick"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $Mob$Type): void
 "damageItem"<T extends $LivingEntity>(arg0: $ItemStack$Type, arg1: integer, arg2: T, arg3: $Consumer$Type<(T)>): integer
 "makesPiglinsNeutral"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "getCraftingRemainingItem"(arg0: $ItemStack$Type): $ItemStack
 "hasCraftingRemainingItem"(arg0: $ItemStack$Type): boolean
 "getEnchantmentValue"(arg0: $ItemStack$Type): integer
 "canApplyAtEnchantingTable"(arg0: $ItemStack$Type, arg1: $Enchantment$Type): boolean
 "getDefaultTooltipHideFlags"(arg0: $ItemStack$Type): integer
 "canGrindstoneRepair"(arg0: $ItemStack$Type): boolean
 "isNotReplaceableByPickAction"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: integer): boolean
 "shouldCauseBlockBreakReset"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
 "canWalkOnPowderedSnow"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "createEntity"(arg0: $Level$Type, arg1: $Entity$Type, arg2: $ItemStack$Type): $Entity
 "getAllEnchantments"(arg0: $ItemStack$Type): $Map<($Enchantment), (integer)>
 "isEnderMask"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $EnderMan$Type): boolean
 "canDisableShield"(arg0: $ItemStack$Type, arg1: $ItemStack$Type, arg2: $LivingEntity$Type, arg3: $LivingEntity$Type): boolean
 "canPerformAction"(arg0: $ItemStack$Type, arg1: $ToolAction$Type): boolean
 "getSweepHitBox"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): $AABB
 "canElytraFly"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "onEntitySwing"(arg0: $ItemStack$Type, arg1: $LivingEntity$Type): boolean
 "getEntityLifespan"(arg0: $ItemStack$Type, arg1: $Level$Type): integer
 "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
 "onDestroyed"(arg0: $ItemEntity$Type, arg1: $DamageSource$Type): void
 "getHighlightTip"(arg0: $ItemStack$Type, arg1: $Component$Type): $Component
 "getDamage"(arg0: $ItemStack$Type): integer
 "getMaxStackSize"(arg0: $ItemStack$Type): integer
 "transferIngredientData"(arg0: $ItemStack$Type, arg1: $IFusionInventory$Type): void
}

export namespace $IModularItem {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModularItem$Type = ($IModularItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IModularItem_ = $IModularItem$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/machines/$StabilizedSpawner" {
import {$EntityBlockBCore, $EntityBlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$EntityBlockBCore"
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$Direction, $Direction$Type} from "packages/net/minecraft/core/$Direction"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$List, $List$Type} from "packages/java/util/$List"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"

export class $StabilizedSpawner extends $EntityBlockBCore {
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "appendHoverText"(arg0: $ItemStack$Type, arg1: $BlockGetter$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "canConnectRedstone"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $Direction$Type): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StabilizedSpawner$Type = ($StabilizedSpawner);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $StabilizedSpawner_ = $StabilizedSpawner$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/crafting/$FusionRecipe$Serializer" {
import {$JsonObject, $JsonObject$Type} from "packages/com/google/gson/$JsonObject"
import {$RecipeSerializer, $RecipeSerializer$Type} from "packages/net/minecraft/world/item/crafting/$RecipeSerializer"
import {$FriendlyByteBuf, $FriendlyByteBuf$Type} from "packages/net/minecraft/network/$FriendlyByteBuf"
import {$ICondition$IContext, $ICondition$IContext$Type} from "packages/net/minecraftforge/common/crafting/conditions/$ICondition$IContext"
import {$FusionRecipe, $FusionRecipe$Type} from "packages/com/brandon3055/draconicevolution/api/crafting/$FusionRecipe"
import {$ResourceLocation, $ResourceLocation$Type} from "packages/net/minecraft/resources/$ResourceLocation"
import {$Recipe, $Recipe$Type} from "packages/net/minecraft/world/item/crafting/$Recipe"

export class $FusionRecipe$Serializer implements $RecipeSerializer<($FusionRecipe)> {

constructor()

public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type): $FusionRecipe
public "fromNetwork"(arg0: $ResourceLocation$Type, arg1: $FriendlyByteBuf$Type): $FusionRecipe
public "toNetwork"(arg0: $FriendlyByteBuf$Type, arg1: $FusionRecipe$Type): void
public static "register"<S extends $RecipeSerializer<(T)>, T extends $Recipe<(any)>>(arg0: string, arg1: S): S
public "fromJson"(arg0: $ResourceLocation$Type, arg1: $JsonObject$Type, arg2: $ICondition$IContext$Type): $FusionRecipe
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FusionRecipe$Serializer$Type = ($FusionRecipe$Serializer);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $FusionRecipe$Serializer_ = $FusionRecipe$Serializer$Type;
}}
declare module "packages/com/brandon3055/brandonscore/lib/datamanager/$IDataManagerProvider" {
import {$IDataManager, $IDataManager$Type} from "packages/com/brandon3055/brandonscore/lib/datamanager/$IDataManager"

export interface $IDataManagerProvider {

 "getDataManager"(): $IDataManager

(): $IDataManager
}

export namespace $IDataManagerProvider {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDataManagerProvider$Type = ($IDataManagerProvider);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDataManagerProvider_ = $IDataManagerProvider$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/modules/lib/$IDamageModifier$EffectType" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $IDamageModifier$EffectType extends $Enum<($IDamageModifier$EffectType)> {
static readonly "FIRE": $IDamageModifier$EffectType
static readonly "LIGHTNING": $IDamageModifier$EffectType
static readonly "STAFF_BEAM": $IDamageModifier$EffectType
static readonly "GENERIC": $IDamageModifier$EffectType


public static "values"(): ($IDamageModifier$EffectType)[]
public static "valueOf"(arg0: string): $IDamageModifier$EffectType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDamageModifier$EffectType$Type = (("lightning") | ("fire") | ("staff_beam") | ("generic")) | ($IDamageModifier$EffectType);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IDamageModifier$EffectType_ = $IDamageModifier$EffectType$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/$PlacedItem" {
import {$EntityBlockBCore, $EntityBlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$EntityBlockBCore"
import {$VoxelShape, $VoxelShape$Type} from "packages/net/minecraft/world/phys/shapes/$VoxelShape"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$CollisionContext, $CollisionContext$Type} from "packages/net/minecraft/world/phys/shapes/$CollisionContext"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"
import {$CustomTabHandling, $CustomTabHandling$Type} from "packages/com/brandon3055/brandonscore/lib/$CustomTabHandling"
import {$FluidState, $FluidState$Type} from "packages/net/minecraft/world/level/material/$FluidState"
import {$BlockGetter, $BlockGetter$Type} from "packages/net/minecraft/world/level/$BlockGetter"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$HitResult, $HitResult$Type} from "packages/net/minecraft/world/phys/$HitResult"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$ServerLevel, $ServerLevel$Type} from "packages/net/minecraft/server/level/$ServerLevel"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$DirectionProperty, $DirectionProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$DirectionProperty"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $PlacedItem extends $EntityBlockBCore implements $CustomTabHandling {
static readonly "FACING": $DirectionProperty
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "getCloneItemStack"(arg0: $BlockState$Type, arg1: $HitResult$Type, arg2: $BlockGetter$Type, arg3: $BlockPos$Type, arg4: $Player$Type): $ItemStack
public "addRunningEffects"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Entity$Type): boolean
public "propagatesSkylightDown"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type): boolean
public static "getXOffset"(arg0: integer, arg1: integer): double
public static "getZOffset"(arg0: integer, arg1: integer): double
public "addLandingEffects"(arg0: $BlockState$Type, arg1: $ServerLevel$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: $LivingEntity$Type, arg5: integer): boolean
public "onDestroyedByPlayer"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $Player$Type, arg4: boolean, arg5: $FluidState$Type): boolean
public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "getCollisionShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
public "getShape"(arg0: $BlockState$Type, arg1: $BlockGetter$Type, arg2: $BlockPos$Type, arg3: $CollisionContext$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacedItem$Type = ($PlacedItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $PlacedItem_ = $PlacedItem$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/items/tools/$Dislocator" {
import {$Component, $Component$Type} from "packages/net/minecraft/network/chat/$Component"
import {$UUID, $UUID$Type} from "packages/java/util/$UUID"
import {$Item$Properties, $Item$Properties$Type} from "packages/net/minecraft/world/item/$Item$Properties"
import {$DamageSource, $DamageSource$Type} from "packages/net/minecraft/world/damagesource/$DamageSource"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"
import {$GuiRender, $GuiRender$Type} from "packages/codechicken/lib/gui/modular/lib/$GuiRender"
import {$Item, $Item$Type} from "packages/net/minecraft/world/item/$Item"
import {$TargetPos, $TargetPos$Type} from "packages/com/brandon3055/brandonscore/utils/$TargetPos"
import {$InteractionResultHolder, $InteractionResultHolder$Type} from "packages/net/minecraft/world/$InteractionResultHolder"
import {$TooltipFlag, $TooltipFlag$Type} from "packages/net/minecraft/world/item/$TooltipFlag"
import {$Minecraft, $Minecraft$Type} from "packages/net/minecraft/client/$Minecraft"
import {$Player, $Player$Type} from "packages/net/minecraft/world/entity/player/$Player"
import {$InteractionHand, $InteractionHand$Type} from "packages/net/minecraft/world/$InteractionHand"
import {$AnvilUpdateEvent, $AnvilUpdateEvent$Type} from "packages/net/minecraftforge/event/$AnvilUpdateEvent"
import {$List, $List$Type} from "packages/java/util/$List"
import {$ItemEntity, $ItemEntity$Type} from "packages/net/minecraft/world/entity/item/$ItemEntity"
import {$IHudItem, $IHudItem$Type} from "packages/com/brandon3055/brandonscore/api/hud/$IHudItem"
import {$Map, $Map$Type} from "packages/java/util/$Map"
import {$Entity, $Entity$Type} from "packages/net/minecraft/world/entity/$Entity"

export class $Dislocator extends $Item implements $IHudItem {
static readonly "BY_BLOCK": $Map<($Block), ($Item)>
static readonly "BASE_ATTACK_DAMAGE_UUID": $UUID
static readonly "BASE_ATTACK_SPEED_UUID": $UUID
static readonly "MAX_STACK_SIZE": integer
static readonly "EAT_DURATION": integer
static readonly "MAX_BAR_WIDTH": integer

constructor(arg0: $Item$Properties$Type)

public "setLocation"(arg0: $ItemStack$Type, arg1: $TargetPos$Type): void
public "generateHudText"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $List$Type<($Component$Type)>): void
public static "onAnvilUpdate"(arg0: $AnvilUpdateEvent$Type): void
public "getTargetPos"(arg0: $ItemStack$Type, arg1: $Level$Type): $TargetPos
public "use"(arg0: $Level$Type, arg1: $Player$Type, arg2: $InteractionHand$Type): $InteractionResultHolder<($ItemStack)>
public "appendHoverText"(arg0: $ItemStack$Type, arg1: $Level$Type, arg2: $List$Type<($Component$Type)>, arg3: $TooltipFlag$Type): void
public "isFoil"(arg0: $ItemStack$Type): boolean
public "isEnchantable"(arg0: $ItemStack$Type): boolean
public "isValidRepairItem"(arg0: $ItemStack$Type, arg1: $ItemStack$Type): boolean
public "getXpRepairRatio"(arg0: $ItemStack$Type): float
public "onLeftClickEntity"(arg0: $ItemStack$Type, arg1: $Player$Type, arg2: $Entity$Type): boolean
public "hasCustomEntity"(arg0: $ItemStack$Type): boolean
public "onEntityItemUpdate"(arg0: $ItemStack$Type, arg1: $ItemEntity$Type): boolean
public "canBeHurtBy"(arg0: $DamageSource$Type): boolean
public "dislocateEntity"(arg0: $ItemStack$Type, arg1: $Entity$Type, arg2: $Entity$Type, arg3: $TargetPos$Type): $Entity
public "messageUser"(arg0: $Entity$Type, arg1: $Component$Type): void
public "shouldDisplayHudText"(arg0: $ItemStack$Type, arg1: $Player$Type): boolean
public "renderHudContent"(arg0: $GuiRender$Type, arg1: double, arg2: double, arg3: $List$Type<($Component$Type)>): void
public "computeHudHeight"(arg0: $Minecraft$Type, arg1: $List$Type<($Component$Type)>): double
public "computeHudWidth"(arg0: $Minecraft$Type, arg1: $List$Type<($Component$Type)>): double
public "renderHudBackground"(arg0: $GuiRender$Type, arg1: double, arg2: double, arg3: $List$Type<($Component$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dislocator$Type = ($Dislocator);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $Dislocator_ = $Dislocator$Type;
}}
declare module "packages/com/brandon3055/brandonscore/lib/$IBCoreBlock" {
import {$CompoundTag, $CompoundTag$Type} from "packages/net/minecraft/nbt/$CompoundTag"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"

export interface $IBCoreBlock {

 "getNBTShareTag"(arg0: $ItemStack$Type): $CompoundTag
 "overrideShareTag"(): boolean
}

export namespace $IBCoreBlock {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBCoreBlock$Type = ($IBCoreBlock);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IBCoreBlock_ = $IBCoreBlock$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/config/$ConfigProperty$DecimalFormatter" {
import {$Enum, $Enum$Type} from "packages/java/lang/$Enum"

export class $ConfigProperty$DecimalFormatter extends $Enum<($ConfigProperty$DecimalFormatter)> {
static readonly "RAW_0": $ConfigProperty$DecimalFormatter
static readonly "RAW_1": $ConfigProperty$DecimalFormatter
static readonly "RAW_2": $ConfigProperty$DecimalFormatter
static readonly "RAW_3": $ConfigProperty$DecimalFormatter
static readonly "RAW_4": $ConfigProperty$DecimalFormatter
static readonly "PERCENT_0": $ConfigProperty$DecimalFormatter
static readonly "PERCENT_1": $ConfigProperty$DecimalFormatter
static readonly "PERCENT_2": $ConfigProperty$DecimalFormatter
static readonly "PLUS_PERCENT_0": $ConfigProperty$DecimalFormatter
static readonly "PLUS_PERCENT_1": $ConfigProperty$DecimalFormatter
static readonly "PLUS_PERCENT_2": $ConfigProperty$DecimalFormatter
static readonly "AOE_0": $ConfigProperty$DecimalFormatter
static readonly "AOE_1": $ConfigProperty$DecimalFormatter
static readonly "AOE_2": $ConfigProperty$DecimalFormatter


public static "values"(): ($ConfigProperty$DecimalFormatter)[]
public static "valueOf"(arg0: string): $ConfigProperty$DecimalFormatter
public "format"(arg0: double): string
public static "getSafe"(arg0: integer): $ConfigProperty$DecimalFormatter
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigProperty$DecimalFormatter$Type = (("aoe_2") | ("aoe_0") | ("aoe_1") | ("raw_3") | ("raw_4") | ("plus_percent_0") | ("raw_0") | ("raw_1") | ("plus_percent_2") | ("raw_2") | ("plus_percent_1") | ("percent_0") | ("percent_1") | ("percent_2")) | ($ConfigProperty$DecimalFormatter);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $ConfigProperty$DecimalFormatter_ = $ConfigProperty$DecimalFormatter$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/blocks/$DislocatorReceptacle" {
import {$EntityBlockBCore, $EntityBlockBCore$Type} from "packages/com/brandon3055/brandonscore/blocks/$EntityBlockBCore"
import {$BooleanProperty, $BooleanProperty$Type} from "packages/net/minecraft/world/level/block/state/properties/$BooleanProperty"
import {$StateDefinition, $StateDefinition$Type} from "packages/net/minecraft/world/level/block/state/$StateDefinition"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$Type} from "packages/net/minecraft/world/level/block/state/$BlockBehaviour$Properties"
import {$BlockState, $BlockState$Type} from "packages/net/minecraft/world/level/block/state/$BlockState"
import {$Level, $Level$Type} from "packages/net/minecraft/world/level/$Level"
import {$IdMapper, $IdMapper$Type} from "packages/net/minecraft/core/$IdMapper"
import {$BlockPos, $BlockPos$Type} from "packages/net/minecraft/core/$BlockPos"
import {$Block, $Block$Type} from "packages/net/minecraft/world/level/block/$Block"

export class $DislocatorReceptacle extends $EntityBlockBCore {
static readonly "ACTIVE": $BooleanProperty
static readonly "CAMO": $BooleanProperty
static readonly "BC_TILE_DATA_TAG": string
static readonly "BC_MANAGED_DATA_FLAG": string
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

constructor(arg0: $BlockBehaviour$Properties$Type)

public "onRemove"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
public "onPlace"(arg0: $BlockState$Type, arg1: $Level$Type, arg2: $BlockPos$Type, arg3: $BlockState$Type, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DislocatorReceptacle$Type = ($DislocatorReceptacle);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $DislocatorReceptacle_ = $DislocatorReceptacle$Type;
}}
declare module "packages/com/brandon3055/draconicevolution/api/crafting/$IFusionRecipe$IFusionIngredient" {
import {$Ingredient, $Ingredient$Type} from "packages/net/minecraft/world/item/crafting/$Ingredient"

export interface $IFusionRecipe$IFusionIngredient {

 "get"(): $Ingredient
 "consume"(): boolean
}

export namespace $IFusionRecipe$IFusionIngredient {
const probejs$$marker: never
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFusionRecipe$IFusionIngredient$Type = ($IFusionRecipe$IFusionIngredient);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $IFusionRecipe$IFusionIngredient_ = $IFusionRecipe$IFusionIngredient$Type;
}}
declare module "packages/com/brandon3055/brandonscore/items/$EquippedModelItem" {
import {$EquippedItemModel, $EquippedItemModel$Type} from "packages/com/brandon3055/brandonscore/client/render/$EquippedItemModel"
import {$HumanoidModel, $HumanoidModel$Type} from "packages/net/minecraft/client/model/$HumanoidModel"
import {$EquipmentSlot, $EquipmentSlot$Type} from "packages/net/minecraft/world/entity/$EquipmentSlot"
import {$ItemStack, $ItemStack$Type} from "packages/net/minecraft/world/item/$ItemStack"
import {$LivingEntity, $LivingEntity$Type} from "packages/net/minecraft/world/entity/$LivingEntity"

export interface $EquippedModelItem {

 "getExtendedModel"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: $EquipmentSlot$Type, arg3: $HumanoidModel$Type<(any)>, arg4: boolean): $EquippedItemModel
 "shouldRenderInSlot"(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: $EquipmentSlot$Type): boolean

(arg0: $LivingEntity$Type, arg1: $ItemStack$Type, arg2: $EquipmentSlot$Type, arg3: $HumanoidModel$Type<(any)>, arg4: boolean): $EquippedItemModel
}

export namespace $EquippedModelItem {
function setPartVisibility(arg0: $HumanoidModel$Type<(any)>, arg1: $EquipmentSlot$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EquippedModelItem$Type = ($EquippedModelItem);
/**
 * Global type exported for convenience, use class-specific
 * types if there's a naming conflict.
 */
declare global {
export type $EquippedModelItem_ = $EquippedModelItem$Type;
}}

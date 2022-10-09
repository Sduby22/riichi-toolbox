// #![allow(clippy::type_complexity)]
extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;
use yaku_checker::*;

#[wasm_bindgen]
pub struct CalculationResults(u8, Vec<(String, Vec<String>)>);

#[wasm_bindgen]
pub enum Numbers {
    First,
    Second,
}

#[wasm_bindgen]
pub fn Foo() -> i32 {
    return 2;
}

#[wasm_bindgen]
impl CalculationResults {
    pub fn get_shanten(&self) -> u8 {
        self.0
    }
}

/// return (shanten_num, Vec<(effective_tile, possible_yakus)>)
#[wasm_bindgen]
pub fn check(tiles: &str) -> CalculationResults {
    if let Ok(tiles) = tiles.parse::<ReadyTileSet>() {
        let (shanten_num, shanten_result) = tiles.check();
        CalculationResults(
            shanten_num,
            shanten_result
                .into_iter()
                .map(|(tile, yakus)| {
                    (
                        tile.to_string(),
                        yakus
                            .into_iter()
                            .map(|yaku| yaku.to_string())
                            .collect::<Vec<_>>(),
                    )
                })
                .collect::<Vec<_>>(),
        )
    } else {
        CalculationResults(255, vec![])
    }
}

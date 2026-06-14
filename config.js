/**
 * ═══════════════════════════════════════════════════════════
 *  默认模型配置
 *  网站管理员在此文件中配置默认的 AI 模型账号和 API Key
 *  用户直接使用网站默认模型，无需自行配置 API Key
 * ═══════════════════════════════════════════════════════════
 *
 *  使用说明：
 *  1. 在下方 models 数组中填写你的 API Key
 *  2. 上传到服务器后，用户即可直接使用默认模型
 *  3. 修改此文件后，无需改动 index.html
 */

window.DEFAULT_CONFIG = {

  // ─── 是否启用默认模型 ───
  // true  → 用户可以在设置中选择"使用网站默认模型"
  // false → 用户必须自行配置 API Key（相当于关闭默认模型功能）
  enabled: true,

  // ─── 默认模型列表 ───
  // 在此添加你拥有的 API Key，用户可直接选用
  models: [
    // ===== DeepSeek 默认模型 =====
    // 将下面 key 替换为你自己的 DeepSeek API Key
    // 获取地址：https://platform.deepseek.com/api_keys
    {
      id: "default-ds",
      name: "DeepSeek V4（网站默认）",
      provider: "deepseek",
      url: "https://api.deepseek.com/chat/completions",
      model: "deepseek-v4-flash",
      key: "", // ← 在此填入您的 DeepSeek API Key
    },
  ],
};

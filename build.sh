#!/bin/bash

# 构建脚本，用于处理权限问题

echo "开始构建..."

# 确保node_modules/.bin目录存在
if [ -d "node_modules/.bin" ]; then
  echo "node_modules/.bin目录存在"
else
  echo "创建node_modules/.bin目录"
  mkdir -p node_modules/.bin
fi

# 直接使用npx执行vite构建
echo "使用npx vite build构建项目"
npx vite build

echo "构建完成！"

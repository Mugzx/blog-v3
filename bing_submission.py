import requests
import re
import random
import os
from typing import List

# 配置 - 从环境变量读取敏感信息
sitemap_url = "https://blog.mugzx.top/sitemap.xml" # 替换自己的sitemap
bing_api_url = "https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch"
apikey = os.getenv("BING_API_KEY") # 从环境变量读取
site_url = "https://blog.mugzx.top" # 替换自己的
n = 10 # 每次随机选取的URL数量

def fetch_sitemap_urls(sitemap_url: str) -> List[str]:
	"""提取 Sitemap 中的链接"""
	response = requests.get(sitemap_url)
	response.raise_for_status()
	sitemap_content = response.text
	urls = re.findall(r"<loc>(.*?)</loc>", sitemap_content)
	return urls

def submit_urls_to_bing(api_url: str, apikey: str, site_url: str, url_list: List[str]):
	"""提交链接到 Bing API"""
	headers = {
		"Content-Type": "application/json; charset=utf-8",
	}
	payload = {
		"siteUrl": site_url,
		"urlList": url_list
	}
	params = {
		"apikey": apikey
	}
	response = requests.post(api_url, headers=headers, params=params, json=payload)
	response.raise_for_status()
	return response.json()

def main():
	try:
		# 验证 API Key
		if not apikey:
			print("Error: BING_API_KEY environment variable is not set")
			return

		# 获取sitemap中的所有URL
		print("Fetching URLs from sitemap...")
		all_urls = fetch_sitemap_urls(sitemap_url)
		print(f"Fetched {len(all_urls)} URLs from sitemap.")

		if not all_urls:
			print("No URLs found in sitemap.")
			return

		# 随机选择n个URL（如果可用URL数量不足n，则选择所有可用URL）
		urls_to_submit = random.sample(all_urls, min(n, len(all_urls)))
		print(f"Randomly selected {len(urls_to_submit)} URLs for submission.")

		# 打印要提交的URL（用于调试）
		for url in urls_to_submit:
			print(f" - {url}")

		# 提交到Bing
		print("Submitting URLs to Bing...")
		response = submit_urls_to_bing(bing_api_url, apikey, site_url, urls_to_submit)
		print(f"URLs submitted successfully: {response}")

	except Exception as e:
		print(f"An error occurred: {e}")
		# 退出码非0，让Action失败
		raise

if __name__ == "__main__":
	main()